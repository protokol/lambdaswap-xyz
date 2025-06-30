import type { PropsWithChildren } from 'react';

import BreadcrumbsHeader, {
  type Breadcrumb
} from '@ui/form/breadcrumbs/breadcrumbs-header';
import { Container } from '@ui/layout/Container';

import { cn } from '@lib/utils';

type PageContainerProps = PropsWithChildren & {
  breadcrumbs?: Breadcrumb[];
  actions?: React.ReactNode;
  className?: string;
};
export function PageContainer({
  children,
  breadcrumbs,
  actions,
  className
}: PageContainerProps) {
  return (
    <Container className={cn('mt-2 space-y-10', className)}>
      {breadcrumbs && (
        <BreadcrumbsHeader list={breadcrumbs} actions={actions} />
      )}
      {children}
    </Container>
  );
}
