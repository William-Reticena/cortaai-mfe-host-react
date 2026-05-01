import type { MainProps } from './MainProps';

export function Main({ children, ...rest }: MainProps) {
  return <main {...rest}>{children}</main>;
}
