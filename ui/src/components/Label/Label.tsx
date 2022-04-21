import React, { ReactNode } from 'react';
import * as LabelPrimitives from '@radix-ui/react-label';

import '@sippy/mellow-css/dist/css/mellow.css';

import clsx from 'clsx';

export interface LabelProps {
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
export const Label = ({
  className,
  children,
  id
}: LabelProps) => {
  return (
    <LabelPrimitives.Root className={clsx('input-label', className)} htmlFor={id}>
      {children}
    </LabelPrimitives.Root>
  );
};

export default Label;
