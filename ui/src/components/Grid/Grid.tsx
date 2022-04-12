import React, { ReactNode } from "react";
import "../mellow.css";

import clsx from "clsx";

interface BreakpointConfig {
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number,
  xl?: number,
  ul?: number
}

type BreakpointValue = BreakpointConfig | number;

export interface GridProps {
  /**
   * Number of columns
   */
  cols?: BreakpointValue;
  /**
   * Children
   */
  children?: ReactNode;
  /**
   * Number of columns
   */
  gap?: BreakpointValue;
}

/**
 * Primary UI component for user interaction
 */
export const Grid = ({
  cols = 12,
  gap = 3,
  ...props
}: GridProps) => {
  return (
    <div
      className={clsx(
        'grid',
        {
          [`grid-${cols}`]: typeof cols === 'number',
          [`gap-${gap}`]: typeof gap === 'number'
        },
        typeof cols !== 'number' && {
          [`grid-${cols?.xs}`]: cols?.xs,
          [`grid-sm-${cols.sm}`]: cols?.sm,
          [`grid-md-${cols.md}`]: cols?.md,
          [`grid-lg-${cols.lg}`]: cols?.lg,
          [`grid-xl-${cols.xl}`]: cols?.xl,
          [`grid-ul-${cols.ul}`]: cols?.ul
        },
        typeof gap !== 'number' && {
          [`gap-${gap?.xs}`]: gap?.xs,
          [`gap-sm-${gap.sm}`]: gap?.sm,
          [`gap-md-${gap.md}`]: gap?.md,
          [`gap-lg-${gap.lg}`]: gap?.lg,
          [`gap-xl-${gap.xl}`]: gap?.xl,
          [`gap-ul-${gap.ul}`]: gap?.ul
        }
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Grid;
