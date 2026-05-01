import type { AuthRequest, RegistrationRequest } from '@/shared/dtos/request';
import { AuthResponse, RegistrationResponse } from '@/shared/dtos/response';
import api from './client';

export class AuthApi {
  static async login(request: AuthRequest) {
    const response = await api.post<AuthResponse>('/v1/auth/login', request);

    return new AuthResponse(response.data);
  }

  static async register(request: RegistrationRequest) {
    const response = await api.post<RegistrationResponse>('/v1/users', request);

    return new RegistrationResponse(response.data);
  }
}
