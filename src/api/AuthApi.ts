import type { AuthRequest } from '@/shared/dtos/request';
import { AuthResponse } from '@/shared/dtos/response';
import api from './client';

export class AuthApi {
  static async login(request: AuthRequest) {
    const response = await api.post<AuthResponse>('/v1/auth/login', request);

    return new AuthResponse(response.data);
  }
}
