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
import { User } from '@/users/network/adapters';
import { getUsers } from '@/users/features';
import UserItem from './user-item.vue';

export default defineComponent({
  name: 'UserList',
  components: {
    UserItem,
  },
  setup(_, ctx) {
    const userList = ref<User[]>([]);

    const onUserClick = (user: User) => {
      ctx.emit('user-click', user);
    }

    const users = getUsers(1);

    onMounted(() => users
      .then(value => userList.value = value)
    );

    return {
      userList,
      onUserClick,
    };
  },
})
</script>

<style lang="stylus" scoped>

</style>
