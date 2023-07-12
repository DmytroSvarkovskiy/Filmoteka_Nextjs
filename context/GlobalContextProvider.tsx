import { ReactNode } from 'react';
import 'normalize.css/normalize.css';
import '@/styles/_globals.scss';

type TGlobalContextProps = {
  children: ReactNode;
};
export const GlobalContextProvider = ({ children }: TGlobalContextProps) => {
  return <>{children}</>;
};
