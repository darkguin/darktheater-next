'use client';

import './modal.scss';

import { SignUpPageStrings as t } from '@core/dictionaries';
import ModalView, { ModalViewProps } from '@shared/ui/ModalView/component/ModalView';
import { memo } from 'react';

type Props = {
  email: string;
  maxWidth?: string;
  isOpen?: boolean;
  onAccept?: () => void;
  onClose?: () => void;
} & ModalViewProps;

function SignUpModal({ email, ...props }: Props) {
  return (
    <ModalView {...props}>
      <div className="form__modal">
        <div className="form__modal_header title-semi-bold-3 text-contrast">{t.modal.header}</div>
        <div className="form__modal_text title-medium-1">
          {t.modal.body['before-email']}
          <b className="text-contrast">{email}</b>
          {t.modal.body['after-email']}
        </div>
      </div>
    </ModalView>
  );
}

export default memo(SignUpModal);
