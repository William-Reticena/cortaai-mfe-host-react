import { z } from 'zod';
import { UserRoleEnum } from '@/shared/enums/UserRoleEnum';

export const RegistrationSchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório' }).min(3, { message: 'O nome deve conter no mínimo 3 caracteres' }),
  password: z.string().min(1, { message: 'A senha é obrigatória' }).min(6, { message: 'A senha deve conter no mínimo 6 caracteres' }),
  email: z
    .string()
    .min(1, { message: 'O e-mail é obrigatório' })
    .regex(/^[a-zA-Z0-9._%+-]+@cortaai\.com\.br$/, { message: 'Informe um e-mail válido' }),
  phone: z.string().min(1, { message: 'O telefone é obrigatório' }).min(10, { message: 'O telefone deve conter no mínimo 10 dígitos' }),
  role: z.union([z.literal(UserRoleEnum.CLIENT), z.literal(UserRoleEnum.OWNER)]),
});
