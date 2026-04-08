import { env } from 'cloudflare:workers';
import type { StrapiFetch } from "../interfaces/utils";

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: StrapiFetch): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }
  
  const url = new URL(`${env.CMS_URL}/api/${endpoint}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString());
  let data = await res.json();
  
  if (wrappedByKey) {
    // @ts-ignore
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    // @ts-ignore
    data = data[0];
  }

  return data as T;
}

export function parseMediaContent(imageURL: string) {
  const url = new URL(`${env.CMS_URL}${imageURL}`)
  return url.toString()
}
