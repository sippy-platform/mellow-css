import React, { ReactNode } from 'react';
import '@sippy/mellow-css/dist/css/mellow.css';

export interface DialogContentProps {
  /**
   * Contents of the dialog
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const DialogContent = ({
  children
}: DialogContentProps) => {
  return (
    <div className="dialog-content">
      {children}
    </div>
  );
};

export default DialogContent;
