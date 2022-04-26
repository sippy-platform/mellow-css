import React, { ReactNode } from 'react';

import * as SelectPrimitives from '@radix-ui/react-select';

export interface SelectItemProps {
  /**
   * Value of the input
   */
  value: string;
  /**
   * Label of the input, will default to the value if none is given
   */
  children: ReactNode;
  /**
   * If the value is disabled or not
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const SelectItem = ({
  value,
  children,
  disabled
}: SelectItemProps) => {
  return (
    <SelectPrimitives.Item
      className="item"
      value={value}
      disabled={disabled}
    >
      <SelectPrimitives.ItemText>{children || value}</SelectPrimitives.ItemText>
      <SelectPrimitives.ItemIndicator className="item-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M11.96 5.3a1 1 0 0 1 0 1.4L7.8 10.86a1.5 1.5 0 0 1-2.12 0l-2.4-2.4a1 1 0 0 1 1.42-1.4L6.74 9.1l3.8-3.8a1 1 0 0 1 1.4 0Z"/></svg>
      </SelectPrimitives.ItemIndicator>
    </SelectPrimitives.Item>
  );
};

export default SelectItem;
