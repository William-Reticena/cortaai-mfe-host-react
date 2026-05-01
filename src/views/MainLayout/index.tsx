import { useMe } from '@/hooks/useUser';
import { Box } from '@/shared/common';
import { MainHeader } from './components/MainHeader/MainHeader';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Content } from './components/Content/Content';
import { Navigate } from 'react-router';

export function MainLayout() {
  const { data, isLoading } = useMe();

  if (isLoading && !data) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <h1 className='text-2xl font-bold text-red-500'>Carregando...</h1>
      </div>
    );
  }

  if (!data) {
    return <Navigate to='/login' replace />;
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <MainHeader />

      <Box className='flex flex-1'>
        <Sidebar />

        <Box className='flex-1 bg-gray-100'>
          <Content user={data} />
        </Box>
      </Box>
    </div>
  );
}
