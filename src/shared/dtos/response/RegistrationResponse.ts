export class RegistrationResponse {
  readonly nmUser: string;
  readonly dsPhone: string;

  constructor(data: RegistrationResponse) {
    this.nmUser = data.nmUser;
    this.dsPhone = data.dsPhone;
  }
}
