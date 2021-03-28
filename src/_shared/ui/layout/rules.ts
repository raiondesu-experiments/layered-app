
export type LayoutMap = Record<string, () => Promise<any>>;

export const getLayout = <T extends LayoutMap>(layoutMap: T, defaultLayout: keyof T) => (name: keyof T = defaultLayout) => layoutMap[name];

declare module 'vue-router' {
  interface RouteMeta {
    layout: string;
  }
}
