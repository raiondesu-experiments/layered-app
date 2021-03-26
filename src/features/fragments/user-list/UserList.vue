<template lang="pug">
ul
  user-item(
    v-for="user in userList"
    :key="user.id"
    :user="user"
    @click="onUserClick(user)"
  )
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import UserItem from '@/features/fragments/user-item/UserItem.vue';
import { IUser } from '@/domain/user/resolvers';
import { fillUserList } from './business';

export default defineComponent({
  name: 'UserList',
  components: {
    UserItem,
  },
  setup(props, ctx) {
    const userList = ref<IUser[]>([]);

    const onUserClick = (user: IUser) => {
      ctx.emit('userClick', user);
    }

    onMounted(async () => {
      fillUserList(1, userList);
    });

    return {
      userList,
      onUserClick,
    };
  },
})
</script>

<style lang="stylus" scoped>

</style>
