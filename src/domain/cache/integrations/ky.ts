import ky, { BeforeRequestHook, AfterResponseHook, Options } from 'ky'
import { cachable } from '../business';

export const fromCacheBeforeHook: BeforeRequestHook = (
  input, options
) => {
  const cachedResponse = responseFromCache(input.url);

  if (cachedResponse) {
    return cachedResponse;
  }
}

export const toCacheAfterHook: AfterResponseHook = async (
  input, options, response
) => {
  const cachedResponse = responseFromCache(input.url);

  if (!cachedResponse) {
    const json = await response.json();
    cachable.cache(input.url, JSON.stringify(json));
  }
}

export const cachedHooks: Options = {
  hooks: {
    beforeRequest: [
      fromCacheBeforeHook
    ],
    afterResponse: [
      toCacheAfterHook
    ],
  },
}

export const cachedApi = ky.extend(cachedHooks);

export const responseFromCache = (url: string) => {
  const cache = cachable.fromCache(url);

  if (cache) {
    return new Response(JSON.stringify(cache), {
      status: 200,
    });
  }
}
