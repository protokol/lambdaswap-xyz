import React, { useState } from 'react';

import {
  DialogContent,
  Dialog as DialogRoot,
  DialogTrigger
} from '@ui/dialog/dialog.components';

import { cn } from '@lib/utils';

export type DialogProps = Omit<
  React.ComponentProps<typeof DialogRoot>,
  'open' | 'onOpenChange' | 'defaultOpen'
> & {
  trigger: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  className?: string;
};

export function Dialog({
  trigger,
  children,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  defaultOpen = false,
  className,
  ...props
}: DialogProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalIsOpen;

  const handleOpenChange = (openValue: boolean) => {
    if (controlledOpen === undefined) {
      setInternalIsOpen(openValue);
    }

    controlledOnOpenChange?.(openValue);
  };

  return (
    <DialogRoot {...props} open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      {isOpen && (
        <DialogContent
          className={cn('max-h-[90vh] overflow-y-auto', className)}
        >
          {children}
        </DialogContent>
      )}
    </DialogRoot>
  );
}
