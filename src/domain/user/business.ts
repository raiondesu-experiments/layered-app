import { userRepository } from '@/domain/user/api';
import { IUser } from '@/domain/user/resolvers';
import { dataResolver } from '@/domain/shared/resolvers/Data';

export const getUsersOnPage = (page: number) => userRepository
  .getList(page)
  .then<IUser[]>(dataResolver);

export const getUserData = (id: number) => userRepository
  .getUser(id)
  .then<IUser>(dataResolver);
