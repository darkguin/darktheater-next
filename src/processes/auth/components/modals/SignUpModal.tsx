'use client';

import './modal.scss';

import ModalView from '@shared/ui/ModalView/component/ModalView';
import { FC, memo } from 'react';

type Props = {
  email: string;
  maxWidth?: string;
  isOpen?: boolean;
  onAccept?: () => void;
  onClose?: () => void;
  [key: string]: unknown;
};

const SignUpModal: FC<Props> = function ({ email, ...props }) {
  return (
    <>
      <ModalView {...props}>
        <div className="form__modal">
          <div className="form__modal_header title-semi-bold-3 text-contrast">
            You have successfully registered an account.
          </div>
          <div className="form__modal_text title-medium-1">
            To use the account, you need to go to your
            <b className="text-contrast">{email}</b>
            mailbox and go through the email confirmation procedure.
          </div>
        </div>
      </ModalView>
    </>
  );
};

export default memo(SignUpModal);
