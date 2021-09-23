import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay';
import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal');

export const Modal = ({
  children,
  className,
  onClose,
}) => {
  const onKeydown = ({ key }) => {
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
      <section className={`${styles.root} ${className}`}>
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

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

Modal.defaulProps = {
  className: '',
};
