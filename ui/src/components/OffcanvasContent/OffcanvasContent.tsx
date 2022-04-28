import React, { ReactNode } from 'react';

export interface OffcanvasContentProps {
  /**
   * Contents of the dialog
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const OffcanvasContent = ({
  children
}: OffcanvasContentProps) => {
  return (
    <div className="offcanvas-body">
      {children}
    </div>
  );
};

export default OffcanvasContent;
