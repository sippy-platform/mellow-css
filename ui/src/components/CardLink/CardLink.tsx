import React, { ReactNode } from 'react';
import '@sippy-platform/mellow-css/dist/css/mellow.css';

import clsx from 'clsx';

export interface CardLinkProps {
  /**
   * Custom classes for the dialog
   */
  className?: string;
  /**
   * CardLink contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function CardLink({
  className,
  children,
  ...props
}: CardLinkProps) {
  return (
    <a
      className={clsx(
        'card-link',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export default CardLink;
