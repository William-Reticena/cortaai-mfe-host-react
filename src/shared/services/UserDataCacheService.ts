import { EventEmitter } from './EventEmitter';
import type { MeResponse } from '../dtos/response/MeResponse';

export type UserDataCacheEvents = {
  'user:updated': [userData: MeResponse];
  'user:cleared': [];
};

export class UserDataCacheService {
  private static instance: UserDataCacheService;
  private cache: MeResponse | null = null;
  private eventEmitter: EventEmitter = new EventEmitter();

  private constructor() {}

  static getInstance(): UserDataCacheService {
    if (!UserDataCacheService.instance) {
      UserDataCacheService.instance = new UserDataCacheService();
    }
    return UserDataCacheService.instance;
  }

  setUserData(userData: MeResponse): void {
    this.cache = userData;
    this.eventEmitter.emit('user:updated', userData);
  }

  getUserData(): MeResponse | null {
    return this.cache;
  }

  clearCache(): void {
    this.cache = null;
    this.eventEmitter.emit('user:cleared');
  }

  onUserDataUpdate(callback: (userData: MeResponse) => void): () => void {
    this.eventEmitter.on('user:updated', callback as any);

    return () => {
      this.eventEmitter.off('user:updated', callback as any);
    };
  }

  onCacheCleared(callback: () => void): () => void {
    this.eventEmitter.on('user:cleared', callback as any);

    return () => {
      this.eventEmitter.off('user:cleared', callback as any);
    };
  }

  hasUserData(): boolean {
    return this.cache !== null;
  }
}

export const userDataCacheService = UserDataCacheService.getInstance();
