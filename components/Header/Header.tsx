import { Container } from '@/components';
import styled from './styled.module.scss';
import { GiFilmSpool } from 'react-icons/gi';
import React from 'react';

export const Header = () => {
  return (
    <header className={styled.header}>
      <div className={styled.title__wrap}>
        <GiFilmSpool />
        <h1>Filmoteka</h1>
      </div>
      <input />
    </header>
  );
};
