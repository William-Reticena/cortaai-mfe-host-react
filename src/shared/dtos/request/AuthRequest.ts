export class AuthRequest {
  readonly dsEmail: string;
  readonly dsPassword: string;

  constructor(data: AuthRequest) {
    this.dsEmail = data.dsEmail;
    this.dsPassword = data.dsPassword;
  }
}
