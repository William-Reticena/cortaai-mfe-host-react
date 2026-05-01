import { useNavigate } from 'react-router';
import type { MenuItem } from 'primereact/menuitem';
import { LogOut } from 'lucide-react';

import { Box } from '@/shared/common';
import { AuthUtils } from '@/utils/AuthUtils';

export function Items(): MenuItem[] {
  const navigate = useNavigate();

  return [
    {
      label: 'Perfil',
      items: [
        {
          label: 'Sair',
          icon: (
            <Box className='mr-2'>
              <LogOut className='w-4 h-4' />
            </Box>
          ),
          command: () => {
            AuthUtils.onLogout();
            navigate('/login', { replace: true });
          },
        },
      ],
    },
  ];
}
