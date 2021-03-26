import { IBaseAdapter } from './base';

export class LocalStorageAdapter implements IBaseAdapter {
  public static isEnabled = !!window?.localStorage;

  constructor() {
    if (!LocalStorageAdapter.isEnabled) {
      throw new Error(`${LocalStorageAdapter.name} can not be activated.`);
    }
  }

  public get<T = string>(key: string) {
    try {
      const json = JSON.parse(window?.localStorage.getItem(key) || 'null');

      return json as T;
    } catch (error) {
      Promise.reject(error);
    }
  }

  public set(key: string, value: any) {
    return window?.localStorage.setItem(key, value);
  }
}
