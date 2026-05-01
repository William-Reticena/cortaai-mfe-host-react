import type { UserRoleEnum } from '@/shared/enums/UserRoleEnum';

export class RegistrationRequest {
  readonly nmUser: string;
  readonly dsPassword: string;
  readonly dsEmail: string;
  readonly dsPhone: string;
  readonly tpRole: UserRoleEnum;

  constructor(data: RegistrationRequest) {
    this.nmUser = data.nmUser;
    this.dsPassword = data.dsPassword;
    this.dsEmail = data.dsEmail;
    this.dsPhone = data.dsPhone;
    this.tpRole = data.tpRole;
  }
}
