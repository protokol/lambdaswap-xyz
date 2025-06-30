import { cn } from '@lib/utils';

export function Container({
  className,
  ...props
}: React.ComponentProps<'main'>) {
  return <main className={cn('container mx-auto p-4', className)} {...props} />;
}
