import React, { ReactNode } from 'react';

import * as DialogPrimitives from '@radix-ui/react-dialog';

import clsx from 'clsx';

export interface DialogProps {
  /**
   * Custom classes for the dialog header
   */
  className?: string;
  /**
   * Contents of the dialog header
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const DialogHeader = ({
  className,
  children
}: DialogProps) => {
  return (
    <div
      className={clsx(
        'dialog-header',
        className
      )}
    >
      <DialogPrimitives.Title className="h5">{children}</DialogPrimitives.Title>
      <DialogPrimitives.Close className="btn-close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M3.3 12.7a1 1 0 0 1 0-1.4L6.58 8l-3.3-3.3A1 1 0 0 1 4.7 3.3L8 6.58l3.3-3.3a1 1 0 1 1 1.4 1.42L9.42 8l3.3 3.3a1 1 0 0 1-1.42 1.4L8 9.42l-3.3 3.3a1 1 0 0 1-1.4 0Z"/></svg>
      </DialogPrimitives.Close>
    </div>
  );
};

export default DialogHeader;
