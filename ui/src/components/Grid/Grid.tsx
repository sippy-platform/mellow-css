import React, { ReactNode } from 'react';
import '../mellow.css';

import clsx from 'clsx';

export interface GridProps {
  /**
   * Number of columns
   */
  cols?: number;
  /**
   * Children
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Grid = ({
  cols = 1,
  ...props
}: GridProps) => {
  return (
    <div
      className={clsx(
        'grid',
        {
          [`grid-${cols}`]: cols,
        }
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Grid;
