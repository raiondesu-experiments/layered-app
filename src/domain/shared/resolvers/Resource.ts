import { Converter, mapFactory, mapTypes } from 'parakeet-mapper';

export interface IServerResource<T = any> {
  data: T;
}

export interface IResource<T = any> {
  data: T;
}

export const ConvertResource = <I, O>(
  converter: Converter<I, O>
) => (
  input: IServerResource<I>
) => mapTypes<IServerResource<I>, IResource<O>>(input, {
  data: [converter],
});
