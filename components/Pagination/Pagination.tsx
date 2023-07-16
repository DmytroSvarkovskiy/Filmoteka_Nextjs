'use client';
import ReactPaginate from 'react-paginate';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { TPagination } from './types';
import styled from './styled.module.scss';

export const Pagination = ({
  pageCount = 1,
  forcePage,
  onPageChange,
  initialPage = 1,
}: TPagination) => {
  return (
    <div className={styled.paginationWrap}>
      <ReactPaginate
        previousLabel={<IoIosArrowBack />}
        nextLabel={<IoIosArrowForward />}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        containerClassName={styled.pagination}
        activeClassName={styled.active}
        initialPage={initialPage}
        forcePage={forcePage}
      />
    </div>
  );
};
