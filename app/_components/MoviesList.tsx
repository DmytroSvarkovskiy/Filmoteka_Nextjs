'use client';
import useSwr from 'swr';
import { getMoovies } from '@/services';
export const MoviesList = () => {
  const dataParams = 'movie/now_playing';
  const { data } = useSwr(['movie', dataParams], () => getMoovies(dataParams));

  return (
    <ul>
      {data?.results.map(item => (
        <li key={item.id}>
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  );
};
