import React, { ReactNode, useState } from "react";
import * as CheckboxPrimitives from '@radix-ui/react-checkbox';

import Label from '../Label';

import "../mellow.css";

import clsx from "clsx";

export interface CheckboxProps {
  /**
   * The id attached of the checkbox
   */
  id?: string;
  /**
   * The label attached to the checkbox
   */
  label?: string;
  /**
   * The helper attached to the checkbox
   */
  helper?: string;
  /**
   * Whether or not the checkbox is checked
   */
  checked?: boolean | 'indeterminate';
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
  id,
  className,
  checked,
  label,
  helper
}: CheckboxProps) => {
  const [checkedState, setChecked] = useState(checked);

  if (label || helper) {
    return (
      <div className={clsx('input-form', className)}>
        <CheckboxPrimitives.Root className="input-check" checked={checkedState} onCheckedChange={setChecked} id={id} />
        <Label id={id}>
          {label}
        </Label>
        {helper && <span className="input-text">{helper}</span>}
      </div>
    );
  }

  return (
    <CheckboxPrimitives.Root className="input-check" checked={checked} id="firstCheckbox" />
  );
};

export default Checkbox;
