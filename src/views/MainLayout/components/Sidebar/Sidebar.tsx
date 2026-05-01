import { useState } from 'react';
import { Sidebar as PrimeSidebar } from 'primereact/sidebar';
import { ChevronRight } from 'lucide-react';

import { Box, VStack } from '@/shared/common';
import { Menu } from '../Menu/Menu';

export function Sidebar() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      <Box className='flex items-center cursor-pointer' style={{ width: '2rem', minHeight: '100%' }} onClick={() => setVisible(true)}>
        <ChevronRight className='ml-1' />
      </Box>

      <PrimeSidebar
        visible={visible}
        onHide={() => setVisible(false)}
        content={() => (
          <Box className='min-h-screen flex relative lg:static'>
            <Box className='h-screen block shrink-0 absolute lg:static left-0 top-0 z-1 select-none w-full'>
              <VStack className='h-full'>
                Logo vai aqui
                <Menu />
              </VStack>
            </Box>
          </Box>
        )}
      />
    </>
  );
}
