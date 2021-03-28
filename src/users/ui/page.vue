<template lang="pug">
user-list(
  @user-click="onUserClick"
)

user-info(
  v-if="user"
  v-bind="{ user }"
)
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getUser } from '@/users/features';
import { User } from '@/users/network/adapters';
import UserInfo from '@/users/ui/adapters/user-info.vue';
import UserList from '@/users/ui/adapters/user-list.vue';

export default defineComponent({
  name: 'Users',
  components: {
    UserList,
    UserInfo,
  },
  setup() {
    const user = ref<User | null>(null);

    const onUserClick = (newUser: User) => {
      getUser(newUser.id).then(value => user.value = value);
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
