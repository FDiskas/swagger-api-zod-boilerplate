export function getQueryCacheKey(name: string | ((...args: never) => unknown), query?: object) {
  const cacheKey: string[] = ['cache']

  if (typeof name !== 'function') {
    cacheKey.push(name)
  } else {
    cacheKey.push(extractApiPath(name))
  }

  for (const key in query) {
    const value = query[key as keyof typeof query]
    if (value || value !== '') cacheKey.push(value)
  }

  return cacheKey
}

const extractApiPath = (apiMethod: (...args: never) => unknown): string => {
  const methodString = apiMethod.toString();
  const pathRegex = /path:\s*`([^`]+)`|path:\s*'([^']+)'|path:\s*"([^"]+)"/;
  const match = methodString.match(pathRegex);

  if (match) {
    return match[1] || match[2] || match[3] || '';
  }

  return '';
}