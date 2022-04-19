import React, { ReactNode } from "react";
import * as CheckboxPrimitives from '@radix-ui/react-checkbox';

import ValkyrieIcon, { viCheck } from '@optimisegroup/valkyrie';

import "../mellow.css";

import clsx from "clsx";

export interface CheckboxProps {
  /**
   * Whether or not the checkbox is checked
   */
  checked?: boolean;
  /**
   * Custom classes for the checkbox
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
export const Checkbox = ({
  className
}: CheckboxProps) => {
  return (
    <div className={clsx('input-form', className)}>
      <CheckboxPrimitives.Root className="input-check" defaultChecked id="firstCheckbox" />
      <label className="input-label" htmlFor="firstCheckbox">
        First checkbox
      </label>
    </div>
  );
};

export default Checkbox;
