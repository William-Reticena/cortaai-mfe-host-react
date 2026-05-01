import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { Box, Main } from '@/shared/common';
import { UserRoleEnum } from '@/shared/enums/UserRoleEnum';
import type { ContentProps } from './ContentProps';

export function Content({ user }: ContentProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user.tpRole === UserRoleEnum.OWNER || user.tpRole === UserRoleEnum.CLIENT) {
      let path = '';
      if (user.tpRole === UserRoleEnum.OWNER) {
        path = 'b/';
      } else if (user.tpRole === UserRoleEnum.CLIENT) {
        path = 'c/';
      }

      navigate(path, { replace: true });
    } else {
      navigate('/login', { replace: true });
    }
  }, [user, navigate]);

  return (
    <Main className='flex-1 bg-gray-100 pt-24'>
      <Box className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <Outlet />
      </Box>
    </Main>
  );
}
