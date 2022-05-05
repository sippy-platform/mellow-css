import React, { ReactNode, useMemo } from 'react';

import clsx from 'clsx';

export interface NavBrandProps {
  /**
   * If we have a href, it's an anchor.
   */
  href?: string;
  /**
   * Optional cack handler.
   */
  onClick?: () => void;
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
export const NavBrand = ({
  className,
  children,
  href,
  ...props
}: NavBrandProps) => {
  const Component = useMemo(() => (href ? 'a' : 'button'), [href]);

  return (
    <Component className={clsx('nav-brand', className)} {...props}>{children}</Component>
  );
};

export default NavBrand;
