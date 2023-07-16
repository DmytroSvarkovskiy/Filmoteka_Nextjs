import { apiInstance } from './settings';
import { TResponse, TRequestParams, TDetails, TGetVideos } from './types';

export const getMoovies = async ({ url, page }: TRequestParams) => {
  const response = await apiInstance.get<TResponse>(url, {
    params: { page, language: 'uk-UA' },
  });
  return response.data;
};

export const searchMovies = async (search: string, page: number) => {
  const response = await apiInstance.get<TResponse>('/search/movie', {
    params: { query: search, page },
  });
  return response.data;
};

export const getDetailsInfo = async (id: string) => {
  const response = await apiInstance.get<TDetails>(`/movie/${id}`);
  return response.data;
};

export const getVideos = async (id: string) => {
  const response = await apiInstance.get<TGetVideos>(`/movie/${id}/videos`);
  return response.data;
};
