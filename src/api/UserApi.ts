import { MeResponse } from '@/shared/dtos/response';
import api from './client';

export class UserApi {
  static async me() {
    const response = await api.get<MeResponse>('/v1/users/me');

    return new MeResponse(response.data);
  }
}
