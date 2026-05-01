export class MeResponse {
  readonly nmUser: string;
  readonly dsPhone: string;
  readonly dsEmail: string;
  readonly tpRole: number;

  constructor(data: MeResponse) {
    this.nmUser = data.nmUser;
    this.dsPhone = data.dsPhone;
    this.dsEmail = data.dsEmail;
    this.tpRole = data.tpRole;
  }
}
