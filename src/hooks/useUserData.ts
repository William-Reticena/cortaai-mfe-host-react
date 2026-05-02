import { useEffect, useState } from 'react';
import { userDataCacheService } from '@/shared/services';
import type { MeResponse } from '@/shared/dtos/response/MeResponse';

export const useUserData = () => {
  const [userData, setUserData] = useState<MeResponse | null>(null);

  useEffect(() => {
    setUserData(userDataCacheService.getUserData());

    const unsubscribe = userDataCacheService.onUserDataUpdate((data) => {
      setUserData(data);
    });

    const unsubscribeClear = userDataCacheService.onCacheCleared(() => {
      setUserData(null);
    });

    return () => {
      unsubscribe();
      unsubscribeClear();
    };
  }, []);

  return { userData };
};
