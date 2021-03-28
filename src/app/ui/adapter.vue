<script lang="ts">
import { defineComponent } from 'vue';
import { useLayout } from '@/_shared/layout/features';
import { layoutMap, DEFAULT_LAYOUT } from './layouts';

export default defineComponent({
  setup() {
    return useLayout(layoutMap, DEFAULT_LAYOUT);
  },
})
</script>

<template>
  <component :is="layout"/>
</template>
