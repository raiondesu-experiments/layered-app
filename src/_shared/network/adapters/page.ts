import { Converter, mapTypes } from 'parakeet-mapper';
import { Resource } from './resource';

export interface ServerPage<T = any> extends Resource<T[]> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface Page<T = any> extends Resource<T[]> {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export const isPage = <T>(resource: Resource<T[]>): resource is Page<T> => typeof (resource as Page<T>).page === 'number';

export const ConvertPage = <I, O>(
  converter: Converter<I, O>
) => (
  input: ServerPage<I>
) => mapTypes<ServerPage<I>, Page<O>>(input, {
  page: true,
  total: true,
  perPage: 'per_page',
  totalPages: 'total_pages',
  data: _ => _.data.map(converter),
});
