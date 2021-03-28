<template lang="pug">
component(:is="layout")
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { LoadLayout, TTayoutName } from '@/features/layout/business';

export default defineComponent({
  name: 'App',
  setup() {
    const route = useRoute()
    const layout = ref();

    watch(route, () => {
      layout.value = defineAsyncComponent(LoadLayout(route.meta.layout as TTayoutName));
    }, {
      immediate: true,
    });

    return {
      layout,
    }
  },
})
</script>
