import { useNavigate } from 'react-router';
import { useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';

import { Box, Form, Label, Typography, VStack } from '@/shared/common';
import { useLogin } from '@/hooks/useAuth';
import { LoginSchema } from '@/schemas/loginSchema';

export function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const { mutate: login } = useLogin();

  const handleOnValidLogin = (data: FieldValues) => {
    login(
      { dsEmail: data.email, dsPassword: data.password },
      {
        onSuccess: () => {
          navigate('/');
        },
      },
    );
  };

  return (
    <Box className='flex items-center justify-center min-h-screen max-w-md mx-auto p-4'>
      <Card className='mb-4' pt={{ content: { className: 'p-0!' } }}>
        <VStack className='p-4' gap={4}>
          <Typography variant='h3' className='w-full text-center'>
            Entrar
          </Typography>
          <Typography variant='body2'>Acesse sua conta para agendar um horário</Typography>

          <Form className='w-full' onSubmit={handleSubmit(handleOnValidLogin)}>
            <VStack gap={4}>
              <Box className='w-full'>
                <Label htmlFor='email'>E-mail</Label>
                <InputText autoComplete='email' id='email' type='text' className='p-inputtext-sm w-full' placeholder='exemplo@cortaai.com.br' {...register('email')} />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
              </Box>

              <Box className='w-full'>
                <Label htmlFor='password'>Senha</Label>
                <InputText autoComplete='current-password' id='password' type='password' className='p-inputtext-sm w-full!' placeholder='••••••••' {...register('password')} />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
              </Box>

              <Button className='w-full' label='Entrar' type='submit' />

              <Typography variant='body2' className='w-full text-center'>
                Não tem uma conta?{' '}
                <Box as='span' onClick={() => navigate('/register')} className='text-blue-500 hover:underline cursor-pointer'>
                  Cadastre-se
                </Box>
              </Typography>
            </VStack>
          </Form>
        </VStack>
      </Card>
    </Box>
  );
}
