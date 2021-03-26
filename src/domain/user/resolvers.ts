import { mapFactory } from 'parakeet-mapper';

export interface IServerUser {
  id: number,
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export const ConvertUser = mapFactory<IServerUser, IUser>({
  id: true,
  avatar: true,
  email: true,
  firstName: 'first_name',
  lastName: 'last_name',
});
