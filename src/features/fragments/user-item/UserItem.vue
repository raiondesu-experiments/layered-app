<template lang="pug">
li.user-item {{ user.firstName }}
</template>

<script lang="ts">
import { IUser } from '@/domain/user/resolvers';
import { defineComponent, PropType, toRefs } from 'vue';

export default defineComponent({
  name: 'UserItem',
  props: {
    user: {
      type: Object as PropType<IUser>,
      required: true,
    },
  },
  setup(props) {
    const { user } = toRefs(props);

    return {
      user,
    };
  },
})
</script>

<style lang="stylus" scoped>
.user-item
  cursor pointer
</style>
