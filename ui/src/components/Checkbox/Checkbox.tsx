import React, { useState } from 'react';

import { Switch } from '@headlessui/react'

import clsx from 'clsx';

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
  checked?: boolean;
  /**
   * Custom classes for the checkbox
   */
  className?: string;
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
  const [checkedState, setChecked] = useState(checked ?? false);

  if (label || helper) {
    return (
      <Switch.Group>
        <div className={clsx('input-form', className)}>
          <Switch className="input-check" checked={checkedState} onChange={setChecked} id={id} />
          <Switch.Label>
            {label}
          </Switch.Label>
          {helper && <span className="input-text">{helper}</span>}
        </div>
      </Switch.Group>
    );
  }

  return (
    <Switch className="input-check" checked={checkedState} onChange={setChecked} id={id} />
  );
};

export default Checkbox;
