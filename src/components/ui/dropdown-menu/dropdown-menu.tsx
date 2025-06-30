import { Link, type LinkProps } from '@tanstack/react-router';

import { Button } from '@ui/button';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenu as DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@ui/dropdown-menu/dropdown-menu.components';

type DropdownOptionBase = {
  label: React.ReactNode;
  disabled?: boolean;
};

export type DropdownOptionAction<T> = DropdownOptionBase & {
  type: 'action';
  value: T;
  icon?: React.ReactNode;
  href?: LinkProps['to'];
};

export type DropdownOptionLabel = DropdownOptionBase & {
  type: 'label';
};

export type DropdownOptionDivider = {
  type: 'divider';
  disabled?: never;
};

export type DropdownOptionSubMenu<T> = DropdownOptionBase & {
  type: 'submenu';
  icon?: React.ReactNode;
  subItems: DropdownOption<T>[];
};

export type DropdownOption<T> =
  | DropdownOptionAction<T>
  | DropdownOptionLabel
  | DropdownOptionDivider
  | DropdownOptionSubMenu<T>;

export type DropdownMenuProps<T> = {
  children?: React.ReactNode;
  options: DropdownOption<T>[];
  onSelect?: (value: T) => void;
  align?: 'start' | 'center' | 'end';
};

function renderDropdownItems<T>(
  options: DropdownOption<T>[],
  onSelect?: (value: T) => void
) {
  return options.map((option, index) => {
    switch (option.type) {
      case 'divider':
        return <DropdownMenuSeparator key={`${option.type}-${index}`} />;
      case 'label':
        return (
          <DropdownMenuLabel key={`${option.type}-${index}`}>
            {option.label}
          </DropdownMenuLabel>
        );
      case 'action':
        if (option.href && !option.disabled) {
          return (
            <DropdownMenuItem
              key={`${option.type}-${option.href}-${index}`}
              asChild
              disabled={option.disabled}
            >
              <Link to={option.href!}>
                {option.icon && <span className='mr-2'>{option.icon}</span>}
                {option.label}
              </Link>
            </DropdownMenuItem>
          );
        }

        return (
          <DropdownMenuItem
            key={`${option.type}-${option.value?.toString()}-${index}`}
            disabled={option.disabled}
            onSelect={() => {
              if (option.value !== undefined && onSelect) {
                onSelect(option.value);
              }
            }}
          >
            {option.icon && <span className='mr-2'>{option.icon}</span>}
            {option.label}
          </DropdownMenuItem>
        );
      case 'submenu':
        return (
          <DropdownMenuSub key={`${option.type}-${index}`}>
            <DropdownMenuSubTrigger disabled={option.disabled}>
              {option.icon && <span className='mr-2'>{option.icon}</span>}
              {option.label}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              {renderDropdownItems(option.subItems, onSelect)}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        );
      default:
        return null;
    }
  });
}

export function DropdownMenu<T>({
  children = <Button variant='outline'>Open Menu</Button>,
  options,
  onSelect,
  align = 'end'
}: DropdownMenuProps<T>) {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align={align}>
        {renderDropdownItems(options, onSelect)}
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
