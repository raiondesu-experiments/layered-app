import ky from 'ky';
import { fromBase } from '@/domain/shared/api/config';
import { ConvertResource, IServerResource, ConvertPage, IServerPage } from '@/domain/shared/resolvers';
import { cachedHooks } from '@/domain/cache/integrations/ky';
import { ConvertUser, IServerUser } from './resolvers';

export const UserApi = ky.extend({
  prefixUrl: fromBase('users'),
});

export class UserRepository {
  public getList(page: number) {
    return UserApi.get('', {
      searchParams: {
        page,
      },
    })
      .json<IServerPage<IServerUser>>()
      .then(ConvertPage(ConvertUser));
  }

  public getUser(id: number) {
    return UserApi.extend(cachedHooks).get(`${id}`)
      .json<IServerResource<IServerUser>>()
      .then(ConvertResource(ConvertUser));
  }
}

export const userRepository = new UserRepository();
