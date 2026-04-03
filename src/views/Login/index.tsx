import { useNavigate } from 'react-router';

import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';

import { Box, Label, Typography, VStack } from '@/shared/common';

export function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    const email = (document.getElementById('email') as HTMLInputElement)?.value || '';

    localStorage.setItem('token', 'your-token-here');

    if (email.toLowerCase() === 'barber') {
      navigate('/b');
    } else {
      navigate('/c');
    }
  };

  return (
    <Box className='flex items-center justify-center min-h-screen max-w-md mx-auto p-4'>
      <Card className='mb-4' pt={{ content: { className: 'p-0!' } }}>
        <VStack className='p-4' gap={4}>
          <Typography variant='h3' className='w-full text-center'>
            Entrar
          </Typography>
          <Typography variant='body2'>Acesse sua conta para agendar um horário</Typography>

          <Box className='w-full'>
            <Label htmlFor='email'>E-mail</Label>
            <InputText autoComplete='email' id='email' name='email' type='text' className='p-inputtext-sm w-full' placeholder='exemplo@cortaai.com.br' />
          </Box>

          <Box className='w-full'>
            <Label htmlFor='password'>Senha</Label>
            <InputText autoComplete='current-password' id='password' type='password' name='password' className='p-inputtext-sm w-full!' placeholder='••••••••' />
          </Box>

          <Button onClick={handleLogin} className='w-full' label='Entrar' />
        </VStack>
      </Card>
    </Box>
  );
}
