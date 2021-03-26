import { Converter, mapTypes } from 'parakeet-mapper';

export interface IServerPage<T = any> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}

export interface IPage<T = any> {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: T[];
}

export const ConvertPage = <I, O>(
  converter: Converter<I, O>
) => (
  input: IServerPage<I>
) => mapTypes<IServerPage<I>, IPage<O>>(input, {
  page: true,
  total: true,
  perPage: 'per_page',
  totalPages: 'total_pages',
  data: _ => _.data.map(converter),
});
