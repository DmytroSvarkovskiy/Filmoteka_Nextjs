import { apiInstance } from './settings';
import { TResponse, TRequestParams } from './types';

export const getMoovies = async ({ url, page }: TRequestParams) => {
  const response = await apiInstance.get<TResponse>(url, { params: { page } });
  return response.data;
};
export const searchMovies = async (search: string, page: number) => {
  const response = apiInstance.get<TResponse>('/movie');
};
