import { ReactNode } from 'react';
import styled from './styled.module.scss';

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className={styled.container}>{children}</div>;
};
