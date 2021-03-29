import { BaseAdapter } from './base';
import { LocalStorageAdapter } from './LocalStorage';

export const currentAdapter = new LocalStorageAdapter();

export class Cacheable {
  constructor(
    protected adapter: BaseAdapter
  ) {}

  public cache(key: string, value: any) {
    return this.adapter.set(key, value);
  }

  public fromCache<T = string>(key: string) {
    return this.adapter.get<T>(key);
  }
}

export const cacheable = new Cacheable(currentAdapter);
