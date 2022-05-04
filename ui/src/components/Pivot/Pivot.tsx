import React, { ReactNode, Fragment } from 'react';

import { Tab } from '@headlessui/react';
import clsx from 'clsx';

export interface PivotProps {
  /**
   * The array of options
   */
  variant: 'default' | 'underline' | 'pills';
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * The label attached to the label
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Pivot = ({
  className,
  variant = 'default'
}: PivotProps) => {
  return (
    <Tab.Group as="nav" aria-role="navigation">
      <Tab.List
        className={
          clsx(
            'pivot',
            {
              [`pivot-${variant}`]: variant !== 'default'
            },
            className
          )
        }
      >
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={clsx(
                'pivot-link',
                {
                  'active': selected
                }
              )}
            >
              Tab 1
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={clsx(
                'pivot-link',
                {
                  'active': selected
                }
              )}
            >
              Tab 2
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={clsx(
                'pivot-link',
                {
                  'active': selected
                }
              )}
            >
              Tab 3
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Pivot;
