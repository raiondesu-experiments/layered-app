<template lang="pug">
p.user-info {{ user }}
</template>

<script lang="ts">
import { User } from '@/users/network/adapters';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'UserInfo',
  props: {
    user: {
      type: Object as PropType<User>,
    },
  }
})
</script>

<style lang="stylus" scoped>
.user-info
  border-radius 6px
  background-color #ddd
  padding 1rem
  margin 0.5rem
</style>
