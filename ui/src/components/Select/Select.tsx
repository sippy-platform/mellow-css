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
      defaultValue="1"
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M3.3 5.3a1 1 0 0 1 1.4 0L8 8.58l3.3-3.3a1 1 0 1 1 1.4 1.42l-3.64 3.64a1.5 1.5 0 0 1-2.12 0L3.29 6.71a1 1 0 0 1 0-1.42Z"/></svg>
        </SelectPrimitives.Icon>
      </SelectPrimitives.Trigger>

      <SelectPrimitives.Content className="select-menu content">
        <SelectPrimitives.ScrollUpButton className="navigation-button" />
        <SelectPrimitives.Viewport className="viewport">
          <SelectPrimitives.Item className="item" value="1">
            <SelectPrimitives.ItemText>Test value</SelectPrimitives.ItemText>
            <SelectPrimitives.ItemIndicator className="item-indicator">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M11.96 5.3a1 1 0 0 1 0 1.4L7.8 10.86a1.5 1.5 0 0 1-2.12 0l-2.4-2.4a1 1 0 0 1 1.42-1.4L6.74 9.1l3.8-3.8a1 1 0 0 1 1.4 0Z"/></svg>
            </SelectPrimitives.ItemIndicator>
          </SelectPrimitives.Item>

          <SelectPrimitives.Group>
            <SelectPrimitives.Label className="group-title">Label</SelectPrimitives.Label>
            <SelectPrimitives.Item className="item" value="2">
              <SelectPrimitives.ItemText>Preview value</SelectPrimitives.ItemText>
              <SelectPrimitives.ItemIndicator className="item-indicator">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M11.96 5.3a1 1 0 0 1 0 1.4L7.8 10.86a1.5 1.5 0 0 1-2.12 0l-2.4-2.4a1 1 0 0 1 1.42-1.4L6.74 9.1l3.8-3.8a1 1 0 0 1 1.4 0Z"/></svg>
              </SelectPrimitives.ItemIndicator>
            </SelectPrimitives.Item>

            <SelectPrimitives.Separator className="separator" />

            <SelectPrimitives.Item className="item" value="3">
              <SelectPrimitives.ItemText>Beta value</SelectPrimitives.ItemText>
              <SelectPrimitives.ItemIndicator className="item-indicator">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path fill-rule="evenodd" d="M11.96 5.3a1 1 0 0 1 0 1.4L7.8 10.86a1.5 1.5 0 0 1-2.12 0l-2.4-2.4a1 1 0 0 1 1.42-1.4L6.74 9.1l3.8-3.8a1 1 0 0 1 1.4 0Z"/></svg>
              </SelectPrimitives.ItemIndicator>
            </SelectPrimitives.Item>
          </SelectPrimitives.Group>
        </SelectPrimitives.Viewport>
        <SelectPrimitives.ScrollDownButton className="navigation-button" />
      </SelectPrimitives.Content>
    </SelectPrimitives.Root>
  );
};

export default Select;
