import styled from './styled.module.scss';
import { GiFilmSpool } from 'react-icons/gi';
import React from 'react';
import { NavBar } from '../NavBar';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styled.header}>
      <div className={styled.link__wrap}>
        <Link href="/" className={styled.title__link}>
          <GiFilmSpool />
          <h1>Filmoteka</h1>
        </Link>
        <NavBar />
      </div>
      {/* <input /> */}
    </header>
  );
};
