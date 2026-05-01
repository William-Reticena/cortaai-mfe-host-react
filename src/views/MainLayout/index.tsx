import { useMe } from '@/hooks/useUser';
import { Box } from '@/shared/common';
import { MainHeader } from './components/MainHeader/MainHeader';
import { Sidebar } from './components/Sidebar/Sidebar';

export function MainLayout() {
  const { isLoading } = useMe();

  return isLoading ? (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <h1 className='text-2xl font-bold text-red-500'>Carregando...</h1>
    </div>
  ) : (
    <div className='flex flex-col min-h-screen'>
      <MainHeader />

      <Box className='flex flex-1'>
        <Sidebar />

        <Box className='flex-1 bg-gray-100'>
          <main>
            <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
              {/* <Outlet /> */}
              asasas
            </div>
          </main>
        </Box>
      </Box>
    </div>
  );
}
