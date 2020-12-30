export const appendQueryParams = (endpoint: string, includes: string[] = []): string => {

  if (!includes) {
    return endpoint;
  }

  includes.forEach((include, index) => {
    endpoint = endpoint + (!(index || endpoint.includes('?')) ? '?' : '&') + include;
  });

  return endpoint;
};
