import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@lib/utils';

export type SliderProps = React.ComponentProps<typeof SliderPrimitive.Root> & {
  labelFormatter?: (value: number) => string;
  hideLabel?: boolean;
};

export function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  labelFormatter,
  hideLabel,
  ...props
}: SliderProps) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot='slider'
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot='slider-track'
        className={cn(
          'bg-input relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5'
        )}
      >
        <SliderPrimitive.Range
          data-slot='slider-range'
          className={cn(
            'bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full'
          )}
        />
      </SliderPrimitive.Track>
      {_values.map((thumbValue, index) => (
        <SliderPrimitive.Thumb
          key={index}
          data-slot='slider-thumb'
          className='border-primary bg-background ring-ring/50 relative block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50'
        >
          {!hideLabel && (
            <span className='bg-popover text-popover-foreground absolute -top-1 left-1/2 mb-1 -translate-x-1/2 -translate-y-full transform rounded-md px-2 py-1 text-xs whitespace-nowrap shadow-sm select-none'>
              {labelFormatter ? labelFormatter(thumbValue) : thumbValue}
            </span>
          )}
        </SliderPrimitive.Thumb>
      ))}
    </SliderPrimitive.Root>
  );
}
