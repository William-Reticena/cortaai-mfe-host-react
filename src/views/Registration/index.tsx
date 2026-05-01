import { useNavigate } from 'react-router';
import { Controller, useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

import { Box, Form, Label, Typography, VStack } from '@/shared/common';
import { useRegister } from '@/hooks/useAuth';
import { RegistrationSchema } from '@/schemas/registrationSchema';
import { UserRoleEnum } from '@/shared/enums/UserRoleEnum';

const roleOptions = [
  { label: 'Cliente', value: UserRoleEnum.CLIENT },
  { label: 'Barbearia', value: UserRoleEnum.OWNER },
];

export function Registration() {
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      role: UserRoleEnum.CLIENT,
    },
  });
  const { mutate: registerUser, isPending } = useRegister();

  const handleOnValidRegister = (data: FieldValues) => {
    registerUser(
      {
        nmUser: data.name,
        dsPassword: data.password,
        dsEmail: data.email,
        dsPhone: data.phone,
        tpRole: data.role,
      },
      {
        onSuccess: () => {
          navigate('/login');
        },
      },
    );
  };

  return (
    <Box className='flex items-center justify-center min-h-screen max-w-md mx-auto p-4'>
      <Card className='mb-4 w-full' pt={{ content: { className: 'p-0!' } }}>
        <VStack className='p-4' gap={4}>
          <Typography variant='h3' className='w-full text-center'>
            Criar conta
          </Typography>
          <Typography variant='body2'>Preencha seus dados para acessar a plataforma</Typography>

          <Form className='w-full' onSubmit={handleSubmit(handleOnValidRegister)}>
            <VStack gap={4}>
              <Box className='w-full'>
                <Label htmlFor='name'>Nome</Label>
                <InputText id='name' type='text' autoComplete='name' className='p-inputtext-sm w-full' placeholder='Seu nome completo' {...register('name')} />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
              </Box>

              <Box className='w-full'>
                <Label htmlFor='email'>E-mail</Label>
                <InputText id='email' type='email' autoComplete='email' className='p-inputtext-sm w-full' placeholder='exemplo@cortaai.com.br' {...register('email')} />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
              </Box>

              <Box className='w-full'>
                <Label htmlFor='phone'>Telefone</Label>
                <InputText id='phone' type='tel' autoComplete='tel' className='p-inputtext-sm w-full' placeholder='(11) 99999-9999' {...register('phone')} />
                {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
              </Box>

              <Box className='w-full'>
                <Label htmlFor='password'>Senha</Label>
                <InputText id='password' type='password' autoComplete='new-password' className='p-inputtext-sm w-full' placeholder='••••••••' {...register('password')} />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
              </Box>

              <Box className='w-full'>
                <Label htmlFor='role'>Perfil</Label>
                <Controller
                  control={control}
                  name='role'
                  render={({ field }) => (
                    <Dropdown id='role' value={field.value} options={roleOptions} onChange={(event) => field.onChange(event.value)} placeholder='Selecione um perfil' className='w-full' />
                  )}
                />
                {errors.role && <p className='text-red-500'>{errors.role.message}</p>}
              </Box>

              <Button className='w-full' label='Criar conta' type='submit' loading={isPending} />

              <Typography variant='body2' className='w-full text-center'>
                Já tem uma conta?{' '}
                <Box as='span' onClick={() => navigate('/login')} className='text-blue-500 hover:underline cursor-pointer'>
                  Entrar
                </Box>
              </Typography>
            </VStack>
          </Form>
        </VStack>
      </Card>
    </Box>
  );
}
