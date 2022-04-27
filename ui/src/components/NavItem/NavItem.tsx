import React, { ReactNode, useMemo } from 'react';

import clsx from 'clsx';

export interface NavItemProps {
  /**
   * If we have a href, it's an anchor.
   */
  href?: string;
  /**
   * Optional click handler.
   */
  onClick?: () => void;
  /**
   * Show dividers in the list
   */
  active?: boolean;
  /**
   * Button disabled state.
   */
  disabled?: boolean;
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
export const NavItem = ({
  active = false,
  disabled = false,
  className,
  children,
  href,
  ...props
}: NavItemProps) => {
  const Component = useMemo(() => (href ? 'a' : 'button'), [href]);

  return (
    <li className={clsx('nav-item', className)} {...props}>
      <Component
        className={clsx(
          'nav-link',
          {
            'active': active
          }
        )}
        href={href}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </Component>
    </li>
  );
};

export default NavItem;
