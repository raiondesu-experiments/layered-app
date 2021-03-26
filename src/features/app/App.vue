<template lang="pug">
user-list(
  @userClick="onUserClick"
)

user-info(
  v-if="user"
  v-bind="{ user }"
)
</template>

<script lang="ts">
import { IUser } from '@/domain/user/resolvers';
import { defineComponent, ref } from 'vue';
import UserList from '@/features/fragments/user-list/UserList.vue';
import UserInfo from '@/features/fragments/user-info/UserInfo.vue';
import { loadUserById } from './business';

export default defineComponent({
  name: 'App',
  components: {
    UserList,
    UserInfo,
  },
  setup() {
    const user = ref<IUser | null>(null);

    const onUserClick = (newUser: IUser) => {
      loadUserById(newUser.id, user);
    }

    return {
      user,
      onUserClick,
    };
  },
})
</script>

<style lang="stylus" scoped>
.user-item
  cursor pointer
</style>
