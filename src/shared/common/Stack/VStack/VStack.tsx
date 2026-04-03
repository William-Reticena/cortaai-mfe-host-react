import type { VStackProps } from './VStackProps';

export function VStack({ children, gap = 0, alignItems = 'start', justify = 'start', className = '', ...props }: VStackProps) {
  const gapClasses: Record<number, string> = {
    0: 'gap-0',
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
    12: 'gap-12',
  };

  const alignClasses: Record<string, string> = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  const justifyClasses: Record<string, string> = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const gapClass = gapClasses[gap] || '';
  const alignClass = alignClasses[alignItems] || 'items-start';
  const justifyClass = justifyClasses[justify] || 'justify-start';

  return (
    <div className={`flex flex-col ${gapClass} ${alignClass} ${justifyClass} ${className}`} {...props}>
      {children}
    </div>
  );
}
