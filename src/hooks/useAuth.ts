import { useMutation } from '@tanstack/react-query';

import { AuthApi } from '@/api/AuthApi';
import type { AuthRequest } from '@/shared/dtos/request';

export const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (request: AuthRequest) => AuthApi.login(request),
  });
};
