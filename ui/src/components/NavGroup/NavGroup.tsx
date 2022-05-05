import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface NavGroupProps {
  /**
   * Custom classes for the container box
   */
  className?: string;
  /**
   * Children
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const NavGroup = ({
  className,
  children,
  ...props
}: NavGroupProps) => {
  return (
    <ul className={clsx('nav-bar', className)} {...props}>
      {children}
    </ul>
  );
};

export default NavGroup;
