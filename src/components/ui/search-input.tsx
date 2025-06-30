import { SearchIcon } from 'lucide-react';

import { InputWithAppending } from '@ui/input-with-appending';

export function SearchInput(props: React.ComponentProps<'input'>) {
  return (
    <InputWithAppending
      {...props}
      prefix={<SearchIcon className='text-muted-foreground size-4' />}
    />
  );
}
