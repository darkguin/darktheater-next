'use client';

import { useState } from 'react';
import Modal from 'react-modal';

export function useModal(appElement: string | HTMLElement = '#root') {
  Modal.setAppElement(appElement);

  const [isOpen, changeVisibility] = useState(false);

  const openModal = () => changeVisibility(true);
  const closeModal = () => changeVisibility(false);

  return { isOpen, openModal, closeModal };
}