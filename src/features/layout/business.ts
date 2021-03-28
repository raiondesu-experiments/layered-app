export const DEFAULT_LAYOUT = 'default';

export const layoutMap = {
  default: () => import(`./default.vue`),
};

export type TTayoutName = keyof typeof layoutMap;

export const LoadLayout = (name: keyof typeof layoutMap = DEFAULT_LAYOUT) => layoutMap[name];
