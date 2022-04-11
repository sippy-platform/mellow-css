import React from 'react';
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
  active: boolean;
  /**
   * Button disabled state
   */
  disabled: boolean;
  /**
   * Show button as a block
   */
  block: boolean;
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
  active,
  disabled,
  block,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        'btn',
        `btn-${variant}`,
        color,
        {
          [`btn-${size}`]: size !== 'md',
          'active': active
        }
      )}
      aria-disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
