import { Menu as PrimeMenu } from 'primereact/menu';
import { Items } from './Items';

export function Menu() {
  return <PrimeMenu model={Items()} className='w-full! border-none!' />;
}
