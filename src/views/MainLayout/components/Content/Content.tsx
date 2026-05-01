import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { Box, Main } from '@/shared/common';
import type { ContentProps } from './ContentProps';

export function Content({ user }: ContentProps) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(user.tpRole === 2 ? 'b/' : 'c/');
  }, [user, navigate]);

  return (
    <Main className='flex-1 bg-gray-100 pt-24'>
      <Box className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <Outlet />
      </Box>
    </Main>
  );
}
