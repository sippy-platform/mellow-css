import React, { ReactNode } from 'react';
import '@sippy-platform/mellow-css/dist/css/mellow.css';

import clsx from 'clsx';

export interface CardProps {
  /**
   * Custom classes for the dialog
   */
  className?: string;
  /**
   * Card contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function Card({
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        'card',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
