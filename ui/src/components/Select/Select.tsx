import React from "react";
import "@sippy/mellow-css/dist/css/mellow.css";

import * as SelectPrimitives from '@radix-ui/react-select';

import clsx from "clsx";

export interface SelectProps {
  /**
   * Value of the input
   */
  value?: string;
  /**
   * Type of the input
   */
  type?: string;
  /**
   * Custom classes for the label
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Select = ({
  className,
  value,
  type = 'text',
  ...props
}: SelectProps) => {
  return (
    <SelectPrimitives.Root
      value="1"
      {...props}
    >
      <SelectPrimitives.Trigger
        className={clsx(
          'input-select',
          className
        )}
      >
        <SelectPrimitives.Value />
        <SelectPrimitives.Icon className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path stroke="#000" stroke-linecap="round" stroke-width="2" d="m4 6 4 4 4-4"/></svg>
        </SelectPrimitives.Icon>
      </SelectPrimitives.Trigger>

      <SelectPrimitives.Content className="select-menu content">
        <SelectPrimitives.ScrollUpButton className="navigation-button" />
        <SelectPrimitives.Viewport className="viewport">
          <SelectPrimitives.Item className="item" value="1">
            <SelectPrimitives.ItemText>Test value</SelectPrimitives.ItemText>
            <SelectPrimitives.ItemIndicator className="item-indicator" />
          </SelectPrimitives.Item>

          <SelectPrimitives.Group>
            <SelectPrimitives.Label className="group-title">Label</SelectPrimitives.Label>
            <SelectPrimitives.Item className="item" value="2">
              <SelectPrimitives.ItemText>Preview value</SelectPrimitives.ItemText>
              <SelectPrimitives.ItemIndicator className="item-indicator" />
            </SelectPrimitives.Item>
            <SelectPrimitives.Item className="item" value="3">
              <SelectPrimitives.ItemText>Beta value</SelectPrimitives.ItemText>
              <SelectPrimitives.ItemIndicator className="item-indicator" />
            </SelectPrimitives.Item>
          </SelectPrimitives.Group>

          <SelectPrimitives.Separator className="separator" />
        </SelectPrimitives.Viewport>
        <SelectPrimitives.ScrollDownButton className="navigation-button" />
      </SelectPrimitives.Content>
    </SelectPrimitives.Root>
  );
};

export default Select;
