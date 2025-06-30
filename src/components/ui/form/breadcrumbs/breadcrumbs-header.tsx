import { Link, type LinkProps } from '@tanstack/react-router';
import { ChevronRightIcon } from 'lucide-react';
import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';
import { useMemo } from 'react';

import { Heading } from '@ui/typography/heading';

import { cn } from '@lib/utils';

export type Breadcrumb = {
  name: string;
  href?: LinkProps['to'];
  params?: LinkProps['params'];
};
type BreadcrumbsHeaderProps = {
  className?: string;
  list: Breadcrumb[];
  actions?: ReactNode;
};

const BreadcrumbsHeader: FC<BreadcrumbsHeaderProps> = ({
  className,
  list,
  actions
}) => {
  const mainHeaderItem = useMemo(() => {
    const [last] = [...list].reverse();

    return last;
  }, [list]);

  const breadcrumbItems = useMemo(() => {
    const [, ...rest] = [...list].reverse();

    return rest?.reverse() || [];
  }, [list]);

  return (
    <div className={cn('grid', className)}>
      <nav className='inline-flex items-start gap-2 truncate'>
        {breadcrumbItems.map(({ name, href, params }, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const isText = !href;
          const classNames = cn('truncate text-sm transition', {
            'hover:opacity-80': !isText
          });

          return (
            <Fragment key={`${name}-${href}`}>
              {isText && (
                <div title={name} className={classNames}>
                  {name}
                </div>
              )}
              {!isText && (
                <Link
                  className={classNames}
                  title={name}
                  to={href}
                  params={params}
                >
                  {name}
                </Link>
              )}
              {!isLast && (
                <div title={name} className='text-sm opacity-80'>
                  <ChevronRightIcon className='size-3' />
                </div>
              )}
            </Fragment>
          );
        })}
      </nav>
      <div className='flex items-center justify-between gap-4'>
        <Heading variant='h1'>{mainHeaderItem.name}</Heading>
        {actions && <div className='shrink-0'> {actions}</div>}
      </div>
    </div>
  );
};

export default BreadcrumbsHeader;
