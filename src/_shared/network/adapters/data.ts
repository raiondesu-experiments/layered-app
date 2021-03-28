import { Page } from './page';
import { Resource } from './resource';

export const dataResolver = <T, R extends Resource<T> | Page<T>>(result: R) => result.data as R extends Page<T> ? T[] : T;
