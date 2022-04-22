import React, { ReactNode } from 'react';
import * as InputLabelPrimitives from '@radix-ui/react-label';

import '@sippy/mellow-css/dist/css/mellow.css';

import clsx from 'clsx';

export interface InputLabelProps {
  /**
   * The id of the element this label is attached to
   */
  id?: string;
  /**
   * The label attached to the label
   */
  children?: ReactNode;
  /**
   * Custom classes for the label
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const InputLabel = ({
  className,
  children,
  id
}: InputLabelProps) => {
  return (
    <InputLabelPrimitives.Root className={clsx('input-label', className)} htmlFor={id}>
      {children}
    </InputLabelPrimitives.Root>
  );
};

export default InputLabel;
