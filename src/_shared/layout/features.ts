import { defineAsyncComponent, shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getLayout, LayoutMap } from './rules';

export const useLayout = <T extends LayoutMap>(layouts: T, defaultLayout: keyof T) => {
  const from = getLayout(layouts, defaultLayout);
  const route = useRoute();
  const layout = shallowRef();

  watch(route, () => {
    layout.value = defineAsyncComponent(from(route.meta.layout));
  }, {
    immediate: true,
  });

  return {
    layout,
  }
};
