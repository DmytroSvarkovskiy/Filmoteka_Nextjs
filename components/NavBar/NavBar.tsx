'use client';
import Link from 'next/link';
import { useState } from 'react';
import styled from './styled.module.scss';
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';

export const NavBar = () => {
  const path = usePathname();
  const [visible, setVisible] = useState(false);

  return (
    <div className={`${styled.navBarContainer} ${visible ? styled.visible : ''}`}>
      <nav className={`${styled.nav} ${visible ? styled.visible : ''}`}>
        <div className={styled.linkWrap}>
          <Link
            onClick={() => setVisible(false)}
            className={path === '/' ? styled.active : ''}
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setVisible(false)}
            className={path === '/library' ? styled.active : ''}
            href="library"
          >
            Library
          </Link>
        </div>
        <IoMdClose className={styled.closeIcon} onClick={() => setVisible(false)} />
      </nav>
      <RxHamburgerMenu className={styled.burger} onClick={() => setVisible(prev => !prev)} />
    </div>
  );
};
