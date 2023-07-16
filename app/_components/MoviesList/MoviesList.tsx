'use client';
import useSwr from 'swr';
import { getMoovies } from '@/services';
import { Container, Pagination } from '@/components';
import styled from './styled.module.scss';
import Image from 'next/image';
import { FIRST_PART_IMG } from '@/constans';
import { useEffect, useState } from 'react';
import { mutate } from 'swr';

export const MoviesList = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const dataParams = { url: 'movie/now_playing', page };
  const { data, isLoading, error } = useSwr(['movies', dataParams], ([_, dataParams]) =>
    getMoovies(dataParams)
  );
  useEffect(() => {
    data?.total_pages && setPageCount(data?.total_pages);
  }, [data?.total_pages]);

  const onPageClick = ({ selected }: { selected: number }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage(selected + 1);
    mutate('movies');
  };

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
                src={item.poster_path ? FIRST_PART_IMG + item.poster_path : '/default.jpg'}
                alt={item.title}
                className={styled.image}
              />
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      )}
      {data && !isLoading && !error && pageCount > 1 && (
        <Pagination pageCount={pageCount} onPageChange={onPageClick} initialPage={+page - 1} />
      )}
    </Container>
  );
};
