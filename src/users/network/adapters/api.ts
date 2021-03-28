import ky from 'ky';
import { subUrl } from '@/_shared/network/rules';
import { cachedHooks } from '@/_shared/storage/adapters';
import { ConvertPage, ConvertResource, ServerPage, ServerResource } from '@/_shared/network/adapters';
import { ServerUser, ConvertUser } from './data';

export const UserApi = ky.extend({
  prefixUrl: subUrl('users'),
});

export const CachedUserApi = UserApi.extend(cachedHooks);

export function getList(page: number) {
  return UserApi.get('', {
    searchParams: {
      page,
    },
  })
    .json<ServerPage<ServerUser>>()
    .then(ConvertPage(ConvertUser));
}

export function getUser(id: number) {
  return CachedUserApi.get(`${id}`)
    .json<ServerResource<ServerUser>>()
    .then(ConvertResource(ConvertUser));
}
