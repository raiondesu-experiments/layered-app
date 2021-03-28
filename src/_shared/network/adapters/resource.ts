import { Converter, mapTypes } from 'parakeet-mapper';

export interface ServerResource<T = any> {
  data: T;
}

export interface Resource<T = any> {
  data: T;
}

export const ConvertResource = <I, O>(
  converter: Converter<I, O>
) => (
  input: ServerResource<I>
) => mapTypes<ServerResource<I>, Resource<O>>(input, {
  data: [converter],
});
