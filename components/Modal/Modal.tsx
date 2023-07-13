import { TModalProps } from './types';
import styled from './styled.module.scss';
import { MouseEvent } from 'react';

export const Modal = ({ isOpen, onClose, children }: TModalProps) => {
  if (!isOpen) {
    return null;
  }

  const onBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styled.modal}>
      <div className={styled.overlay} onClick={onBackdropClick}>
        <div className={styled.content}>{children}</div>
      </div>
    </div>
  );
};
