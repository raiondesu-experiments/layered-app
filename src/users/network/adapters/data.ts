import { mapFactory } from 'parakeet-mapper';

export interface ServerUser {
  id: number,
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export const ConvertUser = mapFactory<ServerUser, User>({
  id: true,
  avatar: true,
  email: true,
  firstName: 'first_name',
  lastName: 'last_name',
});
