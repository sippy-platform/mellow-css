import React, { ReactNode, useMemo } from 'react';
import '@sippy/mellow-css/dist/css/mellow.css';
import '@optimisegroup/valkyrie/dist/valkyrie.css';

import clsx from 'clsx';

export interface ListItemDividerProps {
  /**
   * Show a label around the list
   */
  primary?: string;
  /**
   * Show a label around the list
   */
  secondary?: string;
  /**
   * Custom classes for the container box
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
export const ListItemDivider = ({
  primary,
  secondary,
  className,
  ...props
}: ListItemDividerProps) => {
  return (
    <div
      role="presentation"
      className={clsx('list-item-divider', className)}
      {...props}
    >
      {primary}
      {secondary && <span className="list-item-divider-description">{secondary}</span>}
    </div>
  );
};

export default ListItemDivider;
