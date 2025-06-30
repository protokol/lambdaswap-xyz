import { useState } from 'react';

import { Button } from '@ui/button';
import { Card } from '@ui/card';
import { Dialog } from '@ui/dialog/dialog';
import {
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@ui/dialog/dialog.components';
import { Slider } from '@ui/slider';

import { formatPercentage } from '@lib/number-formatter.utils';
import { cn } from '@lib/utils';

interface PoolFeeCardProps {
  tier: {
    percentage: number;
    description: string;
  };
  isSelected: boolean;
  onSelect: () => void;
}

export function PoolFeeCard({ tier, isSelected, onSelect }: PoolFeeCardProps) {
  return (
    <Card
      className={cn(
        'border-border cursor-pointer gap-2 overflow-hidden transition-all duration-200',
        isSelected ? 'border-primary' : 'hover:border-primary'
      )}
      onClick={onSelect}
    >
      <div className='text-center'>
        <span className='font-bold'>
          {formatPercentage(tier.percentage, {
            minimumFractionDigits: 2
          })}
        </span>
      </div>

      <div className='text-muted-foreground text-center text-xs'>
        {tier.description}
      </div>
    </Card>
  );
}

type CustomPoolFeeCardProps = {
  feeTier: number | null;
  onSelect: (feeTier: number) => void;
  isSelected: boolean;
};
export function CustomPoolFeeCard({
  feeTier,
  onSelect,
  isSelected
}: CustomPoolFeeCardProps) {
  return (
    <CustomPoolFeeDialogCard onSelect={onSelect}>
      <Card
        className={cn(
          'border-border cursor-pointer gap-2 overflow-hidden transition-all duration-200',
          isSelected ? 'border-primary' : 'hover:border-primary'
        )}
      >
        <div className='text-center'>
          <span className='font-bold'>
            {feeTier !== null
              ? formatPercentage(feeTier, { minimumFractionDigits: 2 })
              : 'Custom'}
          </span>
        </div>
        <div className='text-muted-foreground text-center text-xs'>
          Set a custom pool fee for your pool.
        </div>
      </Card>
    </CustomPoolFeeDialogCard>
  );
}

type CustomPoolFeeDialogCardProps = {
  children: React.ReactNode;
  onSelect: (feeTier: number) => void;
};

export function CustomPoolFeeDialogCard({
  children,
  onSelect
}: CustomPoolFeeDialogCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [value, setValue] = useState(0);

  const isInputValid = Number(value) >= 0 && Number(value) <= 5;

  return (
    <Dialog
      className='sm:max-w-92'
      trigger={children}
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}
    >
      <DialogHeader>
        <DialogTitle>Custom Pool Fee</DialogTitle>
        <DialogDescription>
          Set a custom pool fee for your pool.
        </DialogDescription>
      </DialogHeader>
      <div className='mt-4'>
        <div>
          <Slider
            labelFormatter={(value) => `${value}%`}
            min={0}
            max={5}
            value={[value]}
            onValueChange={([v]) => setValue(v)}
            step={0.1}
          />
          <div className='text-muted-foreground mt-1 flex flex-row justify-between text-xs'>
            <span>0%</span>
            <span>5%</span>
          </div>
        </div>
      </div>
      <Button
        onClick={() => {
          onSelect(value / 100);
          setIsDialogOpen(false);
        }}
        disabled={!isInputValid}
      >
        Save
      </Button>
    </Dialog>
  );
}
