import React, { ReactNode } from "react";
import * as RadioGroupPrimitives from '@radix-ui/react-radio-group';

import "@sippy/mellow-css/dist/css/mellow.css";

export interface RadioGroupProps {
  /**
   * The name attached of the radio item
   */
  name?: string;
  /**
   * Require checking an option in the radio group
   */
  required?: boolean;
  /**
   * Loop when using keyboard navigation
   */
  loop?: boolean;
  /**
   * Value of the radio item
   */
  value?: string;
  /**
   * Custom classes for the radio item
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
export const RadioGroup = ({
  name,
  className,
  value = '',
  children,
  required = false,
  loop = true
}: RadioGroupProps) => {
  return (
    <RadioGroupPrimitives.Root
      className={className}
      defaultValue={value}
      name={name}
      required={required}
      loop={loop}
    >
      {children}
    </RadioGroupPrimitives.Root>
  );
};

export default RadioGroup;
