import React, { ReactNode } from 'react';
import '@sippy/mellow-css/dist/css/mellow.css';

import * as DialogPrimitives from '@radix-ui/react-dialog';

export interface DialogDescriptionProps {
  /**
   * The label attached to the label
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const DialogDescription = ({
  children
}: DialogDescriptionProps) => {
  return (
    <DialogPrimitives.Description className="dialog-description">
      {children}
    </DialogPrimitives.Description>
  );
};

export default DialogDescription;
