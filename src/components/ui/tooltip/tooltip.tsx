import type { ReactNode } from 'react';

import {
  Tooltip as TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@ui/tooltip/tooltip.components';

type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  asChild?: boolean;
};
export function Tooltip({ content, children, asChild }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipComponent>
        <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </TooltipComponent>
    </TooltipProvider>
  );
}
