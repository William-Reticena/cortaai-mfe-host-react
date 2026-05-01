export class AuthUtils {
  static onLoginSuccess(accessToken: string, refreshToken: string) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  static onLogout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}
