import { dataResolver } from '@/_shared/network/adapters';
import { getList, getUser, User } from './adapters';

export const getUsersOnPage = (page: number) => (
  getList(page)
    .then<User[]>(dataResolver)
);

export const getUserData = (id: number) => (
  getUser(id)
    .then<User>(dataResolver)
);
