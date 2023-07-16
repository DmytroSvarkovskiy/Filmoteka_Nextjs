import { apiInstance } from './settings';
import { TResponse, TRequestParams } from './types';

export const getMoovies = async ({ url, page }: TRequestParams) => {
  const response = await apiInstance.get<TResponse>(url, {
    params: { page, language: 'uk-UA' },
  });
  return response.data;
};
export const searchMovies = async (search: string, page: number) => {
  const response = await apiInstance.get<TResponse>('/search/movie');
  return response.data;
};
