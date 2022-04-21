import React, { ReactNode } from 'react';
import '@sippy/mellow-css/dist/css/mellow.css';

import * as SelectPrimitives from '@radix-ui/react-select';

export interface SelectLabelProps {
  /**
   * Label of the input, will default to the value if none is given
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const SelectLabel = ({
  children
}: SelectLabelProps) => {
  return (
    <SelectPrimitives.Label className="group-title">{children}</SelectPrimitives.Label>
  );
};

export default SelectLabel;
