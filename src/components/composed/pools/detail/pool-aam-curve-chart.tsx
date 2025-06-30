import { useMemo } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
  XAxis,
  YAxis
} from 'recharts';
import type {
  NameType,
  ValueType
} from 'recharts/types/component/DefaultTooltipContent';

import { type ChartConfig, ChartContainer } from '@ui/chart';

import { formatCompactNumber, formatNumber } from '@lib/number-formatter.utils';

/*
      vault0: '0xe0a80d35bB6618CBA260120b279d357978c42BCE',
      vault1: '0xD8b27CF359b7D15710a5BE299AF6e7Bf904984C2',
      fee: '',
      initialReservesX: '100',
      initialReservesY: '10000',
      pricingRatio: '100',
      concentrationX: '0.5',
      concentrationY: '0.5',
      enableAsymmetricLiquidity: false
*/

type ChartDataPoint = {
  x_value: number;
  eulerSwapY?: number | null;
  constantSumY?: number | null;
  constantProductY?: number | null;
};

const MIN_AXIS_VALUE = 0;

const chartDisplayConfig = {
  assetX: {
    label: 'Asset X Reserves'
  },
  assetY: {
    label: 'Asset Y Reserves'
  },
  eulerCurve: {
    label: 'EulerSwap AMM Curve',
    color: 'var(--chart-2)'
  },
  constantSumCurve: {
    label: 'Constant-Sum (Linear Price)',
    color: 'var(--chart-3)'
  },
  constantProductCurve: {
    label: 'Constant-Product (Uniswap V2-like)',
    color: 'var(--chart-4)'
  },
  equilibriumPoint: {
    label: 'Equilibrium (x₀, y₀)',
    color: 'var(--foreground)'
  },
  equilibriumGuides: {
    color: 'var(--border)'
  }
} satisfies ChartConfig;

type PoolAamCurveChartProps = {
  assetXSymbol?: string;
  assetYSymbol?: string;
  initialReservesX: number;
  initialReservesY: number;
  pricingRatio: number;
  concentrationX: number;
  concentrationY: number;
};
export function PoolAamCurveChart({
  assetXSymbol,
  assetYSymbol,
  initialReservesX,
  initialReservesY,
  pricingRatio,
  concentrationX,
  concentrationY
}: PoolAamCurveChartProps) {
  const { chartData, xAxisDomain, yAxisDomain } = useMemo(() => {
    const x0 = Number(initialReservesX);
    const y0 = Number(initialReservesY);
    const px_py_ratio = Number(pricingRatio);
    const cx = Number(concentrationX);
    const cy = Number(concentrationY);

    let currentXAxisDomain: [number, number] = [0, 100];
    let currentYAxisDomain: [number, number] = [0, 100];

    if (
      !Number.isFinite(x0) ||
      x0 <= 0 ||
      !Number.isFinite(y0) ||
      y0 <= 0 ||
      !Number.isFinite(px_py_ratio) ||
      px_py_ratio <= 0 ||
      !Number.isFinite(cx) ||
      cx < 0 ||
      cx > 1 ||
      !Number.isFinite(cy) ||
      cy < 0 ||
      cy > 1
    ) {
      return {
        chartData: [],
        xAxisDomain: currentXAxisDomain,
        yAxisDomain: currentYAxisDomain
      };
    }

    const currentMaxX = 2 * x0;
    const currentMaxY = 2 * y0;
    currentXAxisDomain = [MIN_AXIS_VALUE, currentMaxX];
    currentYAxisDomain = [MIN_AXIS_VALUE, currentMaxY];

    const chartXValues: number[] = [];
    const startX = MIN_AXIS_VALUE;
    const endX = currentMaxX;
    const numberOfPoints = 500;

    if (startX < endX) {
      const step = (endX - startX) / (numberOfPoints - 1);
      for (let i = 0; i < numberOfPoints; i++) {
        chartXValues.push(startX + i * step);
      }
    } else if (startX === endX && startX >= 0) {
      // Handle case where domain is a single point
      chartXValues.push(startX);
    }

    // Ensure the equilibrium point is included for accuracy, if it's within the domain
    if (x0 > startX && x0 < endX && !chartXValues.includes(x0)) {
      chartXValues.push(x0);
      chartXValues.sort((a, b) => a - b);
    }

    const finalChartData: ChartDataPoint[] = chartXValues.map((x) => {
      let eulerSwapY_calc;

      if (x <= 0) {
        eulerSwapY_calc = null;
      } else if (x === x0) {
        eulerSwapY_calc = y0;
      } else if (x < x0) {
        const concentrationFactorX = cx + (1 - cx) * (x0 / x);
        eulerSwapY_calc = y0 + px_py_ratio * (x0 - x) * concentrationFactorX;
      } else {
        const concentrationFactorY = cy + (1 - cy) * (x / x0);
        if (concentrationFactorY === 0) {
          eulerSwapY_calc = null;
        } else {
          eulerSwapY_calc =
            y0 + (px_py_ratio * (x0 - x)) / concentrationFactorY;
        }
      }

      const eulerSwapY =
        eulerSwapY_calc !== null &&
        Number.isFinite(eulerSwapY_calc) &&
        eulerSwapY_calc >= MIN_AXIS_VALUE
          ? eulerSwapY_calc
          : null;

      const constantSumY_calc = px_py_ratio * x0 + y0 - px_py_ratio * x;
      const constantSumY =
        Number.isFinite(constantSumY_calc) &&
        constantSumY_calc >= MIN_AXIS_VALUE
          ? constantSumY_calc
          : null;

      let constantProductY_calc;
      if (x === 0) {
        constantProductY_calc = null;
      } else {
        constantProductY_calc = y0 + px_py_ratio * (x0 - x) * (x0 / x);
      }
      const constantProductY =
        constantProductY_calc !== null &&
        Number.isFinite(constantProductY_calc) &&
        constantProductY_calc >= MIN_AXIS_VALUE
          ? constantProductY_calc
          : null;

      return {
        x_value: x,
        eulerSwapY,
        constantSumY,
        constantProductY
      };
    });

    return {
      chartData: finalChartData,
      xAxisDomain: currentXAxisDomain,
      yAxisDomain: currentYAxisDomain
    };
  }, [
    initialReservesX,
    initialReservesY,
    pricingRatio,
    concentrationX,
    concentrationY
  ]);
  const x0_val = Number(initialReservesX);
  const y0_val = Number(initialReservesY);

  const CustomTooltipContent = ({
    active,
    payload,
    label
  }: TooltipProps<ValueType, NameType>) => {
    if (active && payload && payload.length && label !== undefined) {
      const xValueFormatted =
        typeof label === 'number' && Number.isFinite(label)
          ? formatNumber(label)
          : '-';

      return (
        <div className='bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 rounded-md border p-2 shadow-md'>
          <p className='mb-1 font-semibold'>
            {`${assetXSymbol}: ${xValueFormatted}`}
          </p>
          <ul className='m-0 list-none space-y-1 p-0'>
            {payload.map((entry, index: number) => {
              const valueDisplay =
                entry.value !== undefined &&
                typeof entry.value === 'number' &&
                Number.isFinite(entry.value)
                  ? `${formatNumber(entry.value)} ${assetYSymbol}`
                  : `- ${assetYSymbol}`;
              return (
                <li key={`item-${index}`} className='flex items-center text-sm'>
                  <span
                    className='mr-1.5 inline-block size-2.5 rounded-full'
                    style={{ backgroundColor: entry.color }}
                  />
                  <span
                    style={{ color: entry.color }}
                  >{`${entry.name}: ${valueDisplay}`}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    return null;
  };

  return (
    <ChartContainer
      config={chartDisplayConfig}
      className='aspect-square h-[380px] w-full'
    >
      <ResponsiveContainer width='100%' height='100%'>
        <RechartsLineChart
          data={chartData}
          margin={{ right: 40, left: 20, bottom: 30 }}
        >
          <CartesianGrid />
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey='x_value'
            type='number'
            domain={xAxisDomain}
            label={{
              value: `${assetXSymbol} Reserves`,
              position: 'insideBottom',
              offset: -5,
              dy: 10
            }}
            stroke='var(--muted-foreground)'
            tickFormatter={(tick) =>
              typeof tick === 'number' ? formatCompactNumber(tick) : ''
            }
            allowDataOverflow
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            type='number'
            domain={yAxisDomain}
            label={{
              value: `${assetYSymbol} Reserves`,
              angle: -90,
              position: 'insideLeft',
              offset: 0,
              dx: 0
            }}
            stroke='var(--muted-foreground)'
            tickFormatter={(tick) =>
              typeof tick === 'number' ? formatCompactNumber(tick) : ''
            }
            allowDataOverflow
          />
          <Tooltip
            content={<CustomTooltipContent />}
            cursor={{ stroke: 'var(--foreground)', strokeDasharray: '3 3' }}
          />
          <Legend
            verticalAlign='bottom'
            align='left'
            wrapperStyle={{ paddingTop: '20px' }}
          />
          <Line
            name={chartDisplayConfig.eulerCurve.label}
            type='linear'
            dataKey='eulerSwapY'
            stroke={chartDisplayConfig.eulerCurve.color}
            strokeWidth={2}
            dot={false}
            connectNulls
          />
          <Line
            name={chartDisplayConfig.constantSumCurve.label}
            type='linear'
            dataKey='constantSumY'
            stroke={chartDisplayConfig.constantSumCurve.color}
            strokeWidth={1}
            strokeDasharray='3 3'
            dot={false}
            connectNulls
          />
          <Line
            name={chartDisplayConfig.constantProductCurve.label}
            type='linear'
            dataKey='constantProductY'
            stroke={chartDisplayConfig.constantProductCurve.color}
            strokeWidth={1}
            strokeDasharray='5 5'
            dot={false}
            connectNulls
          />
          {Number.isFinite(x0_val) &&
            x0_val > 0 &&
            Number.isFinite(y0_val) &&
            y0_val > 0 && (
              <>
                <ReferenceDot
                  x={x0_val}
                  y={y0_val}
                  r={6}
                  fill={chartDisplayConfig.equilibriumPoint.color}
                  stroke='var(--background- υψηλή)'
                  strokeWidth={2}
                  label={{
                    value: chartDisplayConfig.equilibriumPoint.label,
                    position: 'top',
                    fill: chartDisplayConfig.equilibriumPoint.color,
                    dy: -10
                  }}
                />
                <ReferenceLine
                  x={x0_val}
                  stroke={chartDisplayConfig.equilibriumGuides.color}
                  strokeDasharray='2 2'
                />
                <ReferenceLine
                  y={y0_val}
                  stroke={chartDisplayConfig.equilibriumGuides.color}
                  strokeDasharray='2 2'
                />
              </>
            )}
        </RechartsLineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
