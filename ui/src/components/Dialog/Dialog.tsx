import React, { ReactNode } from 'react';
import '@sippy/mellow-css/dist/css/mellow.css';

import * as DialogPrimitives from '@radix-ui/react-dialog';

import clsx from 'clsx';

export interface DialogProps {
  /**
   * Disable the modal behavior en allow for external interaction
   */
  disableModal?: boolean;
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * The label attached to the label
   */
  trigger: ReactNode;
  /**
   * The label attached to the label
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Dialog = ({
  className,
  trigger,
  children,
  disableModal = false,
  ...props
}: DialogProps) => {
  return (
    <DialogPrimitives.Root
      modal={!disableModal}
      {...props}
    >
      <DialogPrimitives.Trigger asChild>
        {trigger}
      </DialogPrimitives.Trigger>
      <DialogPrimitives.Portal>
        <DialogPrimitives.Overlay className="backdrop" />
        <DialogPrimitives.Content
          className={clsx(
            'dialog-dialog',
            className
          )}
        >
          {children}
        </DialogPrimitives.Content>
      </DialogPrimitives.Portal>
    </DialogPrimitives.Root>
  );
};

export default Dialog;
