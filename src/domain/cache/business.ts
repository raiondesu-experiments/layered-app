import { IBaseAdapter } from './adapters/base';
import { LocalStorageAdapter } from './adapters/LocalStorage';

export const currentAdapter = new LocalStorageAdapter();

export class Cacheble {
  constructor(
    protected adapter: IBaseAdapter
  ) {}

  public cache(key: string, value: any) {
    return this.adapter.set(key, value);
  }

  public fromCache<T = string>(key: string) {
    return this.adapter.get<T>(key);
  }
}

export const cachable = new Cacheble(currentAdapter);
