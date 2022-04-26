import React, { ReactNode } from 'react';
import '@sippy-platform/mellow-css/dist/css/mellow.css';

export interface AlertTitleProps {
  /**
   * AlertTitle contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function AlertTitle({
  children,
  ...props
}: AlertTitleProps) {
  return (
    <h4
      className="alert-title"
      {...props}
    >
      {children}
    </h4>
  );
};

export default AlertTitle;
