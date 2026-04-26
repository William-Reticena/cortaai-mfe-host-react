import api from './client';

export class UserApi {
  static async me() {
    const response = await api.get('/v1/users/me');

    return response.data;
  }
}
