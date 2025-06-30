import { useEffect, useState } from 'react';

import { cn } from '@lib/utils';

type TokenImageProps = {
  logoURI?: string;
  symbol: string;
  size?: string;
};

export function TokenImage({
  logoURI,
  symbol,
  size = 'size-4'
}: TokenImageProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [logoURI]);

  if (!logoURI || imgError) {
    return <div className={cn('bg-muted rounded-full', size)} />;
  }

  return (
    <img
      src={logoURI}
      alt={symbol}
      className={cn('h-full w-full rounded-full object-cover', size)}
      onError={() => setImgError(true)}
      loading='lazy'
      crossOrigin='anonymous'
    />
  );
}
