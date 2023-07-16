'use client';
import useSwr from 'swr';
import { getMoovies } from '@/services';
import { Container } from '@/components';
import styled from './styled.module.scss';
import Image from 'next/image';
import { FIRST_PART_IMG } from '@/constans.ts';

export const MoviesList = () => {
  const dataParams = { url: 'movie/now_playing', page: 1 };
  const { data, isLoading } = useSwr(['movies', dataParams], ([_, dataParams]) =>
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
              <Image
                width={300}
                height={430}
                src={item.poster_path.length ? FIRST_PART_IMG + item.poster_path : '/default.jpg'}
                alt={item.title}
                className={styled.image}
              />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};
