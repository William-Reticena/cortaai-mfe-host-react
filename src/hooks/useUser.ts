import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { UserApi } from '@/api/UserApi';

export const useMe = () => {
  const navigate = useNavigate();

  return useQuery({
    queryKey: ['me'],
    queryFn: () => UserApi.me(),
    throwOnError: () => {
      navigate('/login');
      return false;
    },
  });
};
