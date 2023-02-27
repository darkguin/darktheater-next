'use client';

import './ModalView.scss';

import { FontIcon, Icons } from '@shared/ui';
import { memo, PropsWithChildren } from 'react';
import Modal from 'react-modal';

export interface ModalViewProps {
  isOpen?: boolean;
  title?: string;
  maxWidth?: string;
  withCloseButton?: boolean;
  closeText?: string;
  acceptText?: string;
  bodyText?: string;
  onClose?: () => void;
  onAccept?: () => void;
}

function ModalView({
  isOpen = false,
  title = '',
  maxWidth = '85vw',
  withCloseButton = false,
  bodyText = '',
  closeText = 'Close',
  acceptText = 'Ok',
  onClose = () => {},
  onAccept = () => {},
  children,
}: PropsWithChildren<ModalViewProps>) {
  const defaultStyle = { content: { maxWidth } };

  return (
    <Modal
      isOpen={isOpen}
      style={defaultStyle}
      className="modal"
      overlayClassName="modal__overlay"
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
    >
      <>
        {(title || withCloseButton) && (
          <div className="modal__header">
            {!!title && <div className="modal__title title-bold-3">{title}</div>}

            {withCloseButton && (
              <div className="modal__close" onClick={onClose}>
                <FontIcon name={Icons.CLOSE}></FontIcon>
              </div>
            )}
          </div>
        )}

        <div className="modal__body title-regular-2">
          {children}
          {bodyText}
        </div>

        <div className="modal__footer">
          <div className="modal__button btn btn--contrast-text" onClick={onClose}>
            {closeText}
          </div>
          <div className="modal__button btn btn--contrast" onClick={onAccept}>
            {acceptText}
          </div>
        </div>
      </>
    </Modal>
  );
}

export default memo(ModalView);