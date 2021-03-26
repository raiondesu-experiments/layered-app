import { getUsersOnPage } from '@/domain/user/business';
import { IUser } from '@/domain/user/resolvers';
import { Ref } from 'vue';

export const fillUserList = async (page: number, container?: Ref<IUser[]>) => {
  const result = await getUsersOnPage(page);

  if (container) {
    container.value = result;
  } else {
    return result;
  }
}
