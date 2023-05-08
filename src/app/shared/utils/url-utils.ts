import { PropCollection } from "../models";

export const urlBuilder = (endpoint: string, props: PropCollection): string => {
  return endpoint.replace(/:(\w+)/g, (match, key) => {
    return props[key] || match;
  });
}
