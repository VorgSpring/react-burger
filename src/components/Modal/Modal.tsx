import React, { useEffect } from 'react';
import cn from 'classnames';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay';
import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal') as Element;

type Props = {
  children: React.ReactNode;
  className?: string | null;
  onClose: () => void;
};

export const Modal = ({
  children,
  className = null,
  onClose,
}: Props) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    if (key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  });

  return ReactDOM.createPortal(
    <>
      <section className={cn(styles.root, className)}>
        <button type="button" className={styles.button} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>

        {children}
      </section>

      <ModalOverlay onClick={onClose} />
    </>,
    modalRoot,
  );
};
