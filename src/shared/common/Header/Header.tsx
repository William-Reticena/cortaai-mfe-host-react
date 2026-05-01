import type { HeaderProps } from './HeaderProps';

export function Header({ children, ...rest }: HeaderProps) {
  return <header {...rest}>{children}</header>;
}
