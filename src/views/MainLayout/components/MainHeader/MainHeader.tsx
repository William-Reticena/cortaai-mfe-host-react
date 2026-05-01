import { Box, Header } from '@/shared/common';

export function MainHeader() {
  return (
    <Header className='fixed top-0 left-0 right-0 z-50 bg-white shadow'>
      <Box className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-gray-900'>CortaAI</h1>
      </Box>
    </Header>
  );
}
