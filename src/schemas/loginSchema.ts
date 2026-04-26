import { z } from 'zod';

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .regex(/^[a-zA-Z0-9._%+-]+@cortaai\.com\.br$/, 'O e-mail deve ser do domínio cortaai.com.br'),
  password: z.string().min(6, 'A senha deve conter no mínimo 6 caracteres'),
});
