import {
  PopoverContent,
  Popover as PopoverRoot,
  PopoverTrigger
} from '@ui/popover/popover.components';

type PopoverProps = React.ComponentProps<typeof PopoverRoot> & {
  trigger: React.ReactNode;
};

export function Popover({ children, trigger, ...props }: PopoverProps) {
  return (
    <PopoverRoot {...props}>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </PopoverRoot>
  );
}
