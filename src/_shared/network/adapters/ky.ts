import ky, { BeforeRequestHook, AfterResponseHook, Options } from 'ky'
import { cacheable } from '../../storage/adapters/cacheable';

export const fromCacheBeforeHook: BeforeRequestHook = (input) => {
  const cachedResponse = responseFromCache(input.url);

  if (cachedResponse) {
    return cachedResponse;
  }
}

export const toCacheAfterHook: AfterResponseHook = async (input, _, response) => {
  const cachedResponse = responseFromCache(input.url);

  if (!cachedResponse) {
    const json = await response.json();
    cacheable.cache(input.url, JSON.stringify(json));
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
  const cache = cacheable.fromCache(url);

  if (cache) {
    return new Response(JSON.stringify(cache), {
      status: 200,
    });
  }
}
