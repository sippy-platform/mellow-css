import React, { ReactNode } from 'react';

import * as SelectPrimitives from '@radix-ui/react-select';

export interface SelectGroupProps {
  /**
   * Label of the input, will default to the value if none is given
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const SelectGroup = ({
  children
}: SelectGroupProps) => {
  return (
    <SelectPrimitives.Group>{children}</SelectPrimitives.Group>
  );
};

export default SelectGroup;
