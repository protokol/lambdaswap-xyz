import type { ReactNode } from 'react';

import { Input } from '@ui/input';

import { cn } from '@lib/utils';

export type InputWithAppendingProps = Omit<
  React.ComponentProps<'input'>,
  'prefix' | 'suffix'
> & {
  prefix?: ReactNode;
  suffix?: ReactNode;
};

export function InputWithAppending({
  prefix,
  suffix,
  className,
  ...props
}: InputWithAppendingProps) {
  return (
    <div
      className={cn(
        'dark:bg-input/30 border-input has-[:focus-visible]:ring-ring/50 has-[:focus-visible]:border-ring flex w-full items-center rounded-md border px-3 transition-[color,box-shadow] has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50 has-[:focus-visible]:ring-[3px] has-[:focus-visible]:outline-none',
        className
      )}
    >
      {Boolean(prefix) && (
        <div className='flex shrink-0 items-center pr-2'>{prefix}</div>
      )}
      <Input
        {...props}
        className={cn(
          'focus-visible::ring-0 border-none px-0 py-0 shadow-none hover:border-none hover:bg-none focus:ring-0 focus-visible:ring-0 dark:bg-transparent'
        )}
      />
      {Boolean(suffix) && (
        <div className='flex shrink-0 items-center pl-2'>{suffix}</div>
      )}
    </div>
  );
}
