import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@lib/utils';

const headingVariants = cva('scroll-m-20 tracking-tight', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold lg:text-5xl',
      h2: 'text-3xl font-semibold',
      h3: 'text-2xl font-semibold transition-colors',
      h4: 'text-xl font-semibold',
      h5: 'text-lg font-semibold'
    }
  },
  defaultVariants: {
    variant: 'h1'
  }
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

function Heading({ className, variant, ...props }: HeadingProps) {
  const Component = variant || 'h1';

  return (
    <Component
      className={cn(headingVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Heading, headingVariants };
