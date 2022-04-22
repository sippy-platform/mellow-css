import React, { ReactNode } from 'react';
import '@sippy/mellow-css/dist/css/mellow.css';

import * as DialogPrimitives from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export interface DialogDescriptionProps {
  /**
   * Hide the node for everything but screenreaders
   */
  visuallyHidden?: boolean;
  /**
   * Content of the dialog description
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const DialogDescription = ({
  visuallyHidden = false,
  children
}: DialogDescriptionProps) => {
  if (visuallyHidden) {
    <VisuallyHidden.Root>
      <DialogPrimitives.Description className="dialog-description">
        {children}
      </DialogPrimitives.Description>
    </VisuallyHidden.Root>
  }

  return (
    <DialogPrimitives.Description className="dialog-description">
      {children}
    </DialogPrimitives.Description>
  );
};

export default DialogDescription;
