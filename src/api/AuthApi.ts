import type { AuthRequest } from '@/shared/dtos/request';
import api from './client';

export class AuthApi {
  static async login(request: AuthRequest) {
    const response = await api.post('/v1/auth/login', request);

    return response.data;
  }
}
