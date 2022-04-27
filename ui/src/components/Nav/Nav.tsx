import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface NavProps {
  /**
   * Show dividers in the list
   */
  variant?: 'light' | 'full';
  /**
   * The color of the list
   */
  color?: 'light' | 'dark' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent';
  /**
   * The button size.
   */
  size?: 'sm' | 'md' | 'lg';
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
export const Nav = ({
  variant = 'light',
  color = 'light',
  size = 'md',
  className,
  children,
  ...props
}: NavProps) => {
  return (
    <nav
      className={clsx(
        'nav',
        `nav-${variant}`,
        `bg-${color}`,
        {
          [`nav-${size}`]: size !== 'md'
        },
        className
      )}
      {...props}
    >
      <div className="nav-bar me-auto">
        {children}
      </div>
    </nav>
  );
};

export default Nav;
