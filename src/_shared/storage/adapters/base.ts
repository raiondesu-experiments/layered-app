export interface BaseAdapter {
  get: <T = string>(key: string) => T | undefined;
  set: (key: string, value: any) => void;
}
