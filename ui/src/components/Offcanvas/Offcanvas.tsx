import React, { Fragment, ReactNode, useState } from 'react';

import * as DialogPrimitives from '@radix-ui/react-dialog';
import { Dialog, Transition } from '@headlessui/react'

import clsx from 'clsx';
import Button from '../Button/Button';
import ValkyrieIcon, { viXmark } from '@optimisegroup/valkyrie';

export interface OffcanvasProps {
  /**
   * Disable the modal behavior en allow for external interaction
   */
  disableModal?: boolean;
  /**
   * Position
   */
  position?: 'start' | 'end';
  /**
   * Custom classes for the dialog
   */
  className?: string;
  /**
   * The react node that will open the dialog
   */
  trigger: ReactNode;
  /**
   * The contents of the dialog
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Offcanvas = ({
  className,
  trigger,
  children,
  disableModal = false,
  position = 'start',
  ...props
}: OffcanvasProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open canvas</Button>
      <Transition appear show={open} as={Fragment}>
        <Dialog onClose={() => setOpen(false)} className="position-relative">
          <Transition.Child
            as={Fragment}
            enter="transition-all duration-200 ease-inout"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all duration-200 ease-inout"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="backdrop" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all duration-200 ease-inout"
            enterFrom="transform-x-n100"
            enterTo="transform-none"
            leave="transition-all duration-200 ease-inout"
            leaveFrom="transform-none"
            leaveTo="transform-x-n100"
          >
            <Dialog.Panel className="offcanvas offcanvas-start">
              <div className="offcanvas-header">
                <Dialog.Title className="offcanvas-title" as="h5">Deactivate account</Dialog.Title>
                <button value="cancel" className="btn-close" onClick={() => setOpen(false)}><ValkyrieIcon icon={viXmark} /></button>
              </div>
              <div className="offcanvas-body">
                <Dialog.Description>
                  This will permanently deactivate your account
                </Dialog.Description>

                <p>
                  Are you sure you want to deactivate your account? All of your data
                  will be permanently removed. This action cannot be undone.
                </p>

                <Button onClick={() => setOpen(false)}>Deactivate</Button>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default Offcanvas;
