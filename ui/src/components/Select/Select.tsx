import React, { ReactNode } from 'react';
import '@sippy/mellow-css/dist/css/mellow.css';

import * as SelectPrimitives from '@radix-ui/react-select';

import clsx from 'clsx';

export interface SelectProps {
  /**
   * Value of the input
   */
  value?: string;
  /**
   * Type of the input
   */
  type?: string;
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * The label attached to the label
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Select = ({
  className,
  value,
  type = 'text',
  children,
  ...props
}: SelectProps) => {
  return (
    <SelectPrimitives.Root
      defaultValue={value}
      {...props}
    >
      <SelectPrimitives.Trigger
        className={clsx(
          'input-select',
          className
        )}
      >
        <SelectPrimitives.Value />
        <SelectPrimitives.Icon className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M3.3 5.3a1 1 0 0 1 1.4 0L8 8.58l3.3-3.3a1 1 0 1 1 1.4 1.42l-3.64 3.64a1.5 1.5 0 0 1-2.12 0L3.29 6.71a1 1 0 0 1 0-1.42Z"/></svg>
        </SelectPrimitives.Icon>
      </SelectPrimitives.Trigger>

      <SelectPrimitives.Content className="select-menu content">
        <SelectPrimitives.ScrollUpButton className="navigation-button" />
        <SelectPrimitives.Viewport className="viewport">
          {children}
        </SelectPrimitives.Viewport>
        <SelectPrimitives.ScrollDownButton className="navigation-button" />
      </SelectPrimitives.Content>
    </SelectPrimitives.Root>
  );
};

export default Select;
