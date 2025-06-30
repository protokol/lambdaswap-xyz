'use client';

import { type VariantProps, cva } from 'class-variance-authority';
import type { FC, ReactNode } from 'react';
import type { ExternalToast } from 'sonner';
import { Toaster as Sonner, toast } from 'sonner';

import { Card, CardTitle } from '@ui/card';

import { cn } from '@lib/utils';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster: FC<ToasterProps> = (props) => (
  <Sonner duration={5000} {...props} />
);

type BaseCustomToast = {
  title: string;
  description?: ReactNode;
};

type CustomToast = ExternalToast & BaseCustomToast;

const toastVariants = cva(
  'group pointer-events-auto min-w-82 relative flex w-full grid gap-2 overflow-hidden p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

const toastInfo = ({ title, description, ...config }: CustomToast) =>
  toast.custom(() => <Toast title={title} description={description} />, config);
const toastError = ({ title, description, ...config }: CustomToast) =>
  toast.custom(
    () => (
      <Toast variant='destructive' title={title} description={description} />
    ),
    config
  );

export { Toaster, toastInfo, toastError };

type ToastProps = BaseCustomToast & VariantProps<typeof toastVariants>;

const Toast: FC<ToastProps> = ({ variant, title, description }) => (
  <Card className={cn(toastVariants({ variant }))}>
    <CardTitle>{title}</CardTitle>
    {description && <span className='text-sm'>{description}</span>}
  </Card>
);
