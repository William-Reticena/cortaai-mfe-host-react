export class AuthResponse {
  readonly dsAccessToken: string;
  readonly dsRefreshToken: string;
  readonly dsTokenType: string;
  readonly nrExpiresIn: number;

  constructor(data: AuthResponse) {
    this.dsAccessToken = data.dsAccessToken;
    this.dsRefreshToken = data.dsRefreshToken;
    this.dsTokenType = data.dsTokenType;
    this.nrExpiresIn = data.nrExpiresIn;
  }
}
