'use client';
import useSwr from 'swr';
import { getMoovies } from '@/services';
import { Container } from '@/components';
import styled from './styled.module.scss';
export const MoviesList = () => {
  const dataParams = { url: 'movie/now_playing', page: 1 };
  const { data, isLoading } = useSwr(['movie', dataParams], ([_, dataParams]) =>
    getMoovies(dataParams)
  );

  return (
    <Container>
      {isLoading ? (
        <div>LOADING...</div>
      ) : (
        <ul className={styled.moviesList}>
          {data?.results.map(item => (
            <li key={item.id}>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};
