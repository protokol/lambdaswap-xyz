import { CheckIcon, CopyIcon } from 'lucide-react';
import { useCallback, useState } from 'react';

import { Button } from '@ui/button';
import { Tooltip } from '@ui/tooltip/tooltip';

import { cn } from '@lib/utils';

type CopyButtonProps = {
  value: string;
  size?: 'base' | 'sm';
  className?: string;
};

export function CopyButton({
  value,
  className,
  size = 'base'
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(String(value));
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [value]);

  const sizes = {
    base: 'size-4',
    sm: 'size-3'
  };

  return (
    <Tooltip asChild content={copied ? 'Copied!' : 'Copy'}>
      <Button
        variant='ghost'
        size='sm-icon'
        onClick={handleCopy}
        className={cn('hover:!bg-transparent', className)}
      >
        {copied ? (
          <CheckIcon className={cn('text-success', sizes[size])} />
        ) : (
          <CopyIcon className={sizes[size]} />
        )}
      </Button>
    </Tooltip>
  );
}
