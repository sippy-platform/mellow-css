import React from "react";
import * as RadioGroupPrimitives from '@radix-ui/react-radio-group';

import Label from '../Label';

import "@sippy/mellow-css/dist/css/mellow.css";

import clsx from "clsx";

export interface RadioProps {
  /**
   * The id attached of the radio item
   */
  id?: string;
  /**
   * The label attached to the radio item
   */
  label?: string;
  /**
   * The helper attached to the radio item
   */
  helper?: string;
  /**
   * Value of the radio item
   */
  value?: string;
  /**
   * Custom classes for the radio item
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Radio = ({
  id,
  className,
  value = '',
  label,
  helper
}: RadioProps) => {
  if (label || helper) {
    return (
      <div className={clsx('input-form', className)}>
        <RadioGroupPrimitives.Item
          className="input-check"
          value={value}
          id={id}
        />
        <Label id={id}>
          {label}
        </Label>
        {helper && <span className="input-text">{helper}</span>}
      </div>
    );
  }

  return (
    <RadioGroupPrimitives.Item className={clsx('input-check', className)} value={value} id={id} />
  );
};

export default Radio;
