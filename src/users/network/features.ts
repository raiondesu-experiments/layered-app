import { dataResolver } from '@/_shared/network/adapters';
import { getList, getUser, User } from './adapters';
import { toPositive } from './rules';

export const getUsersOnPage = (page: number) => (
  getList(toPositive(page))
    .then<User[]>(dataResolver)
);

export const getUserData = (id: number) => (
  getUser(toPositive(id))
    .then<User>(dataResolver)
);
