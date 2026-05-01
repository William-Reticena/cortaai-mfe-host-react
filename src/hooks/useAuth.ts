import { useMutation } from '@tanstack/react-query';

import { AuthUtils } from '@/utils/AuthUtils';
import { AuthApi } from '@/api/AuthApi';
import type { AuthRequest, RegistrationRequest } from '@/shared/dtos/request';

export const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (request: AuthRequest) => AuthApi.login(request),
    onSuccess: (data) => {
      AuthUtils.onLoginSuccess(data.dsAccessToken, data.dsRefreshToken);
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: (request: RegistrationRequest) => AuthApi.register(request),
  });
};
