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

const SignInModal: FC<Props> = function ({ email, ...props }) {
  return (
    <>
      <ModalView {...props}>
        <div className="form__modal">
          <div className="form__modal_header title-semi-bold-3 text-contrast">
            This account has not been confirmed
          </div>
          <div className="form__modal_text title-medium-1">
            We have re-sent you an email to confirm your account. <br />
            You need to go to your
            <b className="text-contrast"> {email} </b>
            mailbox and go through the email confirmation procedure.
          </div>
        </div>
      </ModalView>
    </>
  );
};

export default memo(SignInModal);
