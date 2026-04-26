import { useMe } from '@/hooks/useUser';

export function MainLayout() {
  const { data, isLoading } = useMe();

  return isLoading ? (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <h1 className='text-2xl font-bold text-red-500'>Carregando...</h1>
    </div>
  ) : (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold text-gray-900'>Minha Aplicação</h1>
        </div>
      </header>
      <main>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          {/* <Outlet /> */}
          asasas
        </div>
      </main>
    </div>
  );
}
