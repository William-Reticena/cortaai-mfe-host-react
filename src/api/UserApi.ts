import { MeResponse } from '@/shared/dtos/response';
import { userDataCacheService } from '@/shared/services';
import api from './client';

export class UserApi {
  static async me() {
    const response = await api.get<MeResponse>('/v1/users/me');
    const meResponse = new MeResponse(response.data);

    userDataCacheService.setUserData(meResponse);

    return meResponse;
  }
}
