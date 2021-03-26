import { IPage } from '@/domain/shared/resolvers/Page';
import { IResource } from '@/domain/shared/resolvers/Resource';

export const dataResolver = <T, R extends IResource<T> | IPage<T>>(result: R) => result.data as R extends IPage<T> ? T[] : T;
