import React from 'react';
import '@sippy/mellow-css/dist/css/mellow.css';

import * as SelectPrimitives from '@radix-ui/react-select';

/**
 * Primary UI component for user interaction
 */
export const SelectDivider = () => {
  return (
    <SelectPrimitives.Separator className="separator" />
  );
};

export default SelectDivider;
