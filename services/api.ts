import { apiInstance } from './settings';
import { TResponse } from './types';

export const getMoovies = async (url: string) => {
  const response = await apiInstance.get<TResponse>(url);
  return response.data;
};
