'use client';
import Link from 'next/link';
import { useState } from 'react';
import styled from './styled.module.scss';
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';

export const NavBar = () => {
  const path = usePathname();
  const [visible, setVisible] = useState(false);
  return (
    <>
      <nav className={`${styled.nav} ${visible ? styled.visible : ''}`}>
        <Link className={path === '/' ? styled.active : ''} href="/">
          Home
        </Link>
        <Link className={path === '/library' ? styled.active : ''} href="library">
          Library
        </Link>
      </nav>
      <RxHamburgerMenu className={styled.burger} onClick={() => setVisible(prev => !prev)} />
      {/* <div></div> */}
    </>
  );
};
