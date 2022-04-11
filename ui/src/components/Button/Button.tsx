import React, { useMemo } from 'react';
import '../mellow.css';

import clsx from 'clsx';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'default' | 'color' | 'hover' | 'primary' | 'secondary' | 'danger' | 'success';
  /**
   * What background color to use
   */
  color?: 'red' | 'oragne' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent';
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Button activation state
   */
  active?: boolean;
  /**
   * Button disabled state
   */
  disabled?: boolean;
  /**
   * Show button as a block
   */
  block?: boolean;
  /**
   * If we have a href, it's an anchor
   */
  href?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'default',
  size = 'md',
  color,
  label,
  active = false,
  disabled = false,
  block = false,
  href,
  ...props
}: ButtonProps) => {
  const Component = useMemo(() => (href ? 'a' : 'button'), [href]);

  return (
    <Component
      type="button"
      className={clsx(
        'btn',
        `btn-${variant}`,
        {
          [`btn-${size}`]: size !== 'md',
          'active': active,
          [`${color}`]: variant === 'color' || variant === 'hover'
        }
      )}
      href={href}
      aria-disabled={disabled}
      {...props}
    >
      {label}
    </Component>
  );
};

export default Button;
