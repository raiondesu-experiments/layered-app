import { getUserData } from '@/domain/user/business';
import { IUser } from '@/domain/user/resolvers';
import { Ref } from 'vue';

export const loadUserById = async (id: number, container?: Ref<IUser | null>) => {
  const result = await getUserData(id);

  if (container) {
    container.value = result;
  } else {
    return result;
  }
}
