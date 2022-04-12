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

interface BreakpointConfigOrder {
  xs?: number | 'first' | 'last',
  sm?: number | 'first' | 'last',
  md?: number | 'first' | 'last',
  lg?: number | 'first' | 'last',
  xl?: number | 'first' | 'last',
  ul?: number | 'first' | 'last'
}

type BreakpointValue = BreakpointConfig | number;
type BreakpointOrderValue = BreakpointConfigOrder | number | 'first' | 'last';

export interface ColProps {
  /**
   * Number of columns
   */
  xs?: number | 'full';
  /**
   * Number of columns
   */
  sm?: number | 'full';
  /**
   * Number of columns
   */
  md?: number | 'full';
  /**
   * Number of columns
   */
  lg?: number | 'full';
  /**
   * Number of columns
   */
  xl?: number | 'full';
  /**
   * Number of columns
   */
  ul?: number | 'full';
  /**
   * The start point of the column
   */
  start?: BreakpointValue;
  /**
   * Change the order of the column
   */
  order?: BreakpointOrderValue;
  /**
   * Custom classes for the col box
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
export const Col = ({
  xs = 1,
  sm,
  md,
  lg,
  xl,
  ul,
  start,
  order,
  className,
  ...props
}: ColProps) => {
  return (
    <div
      className={clsx(
        className,
        {
          [`col-${xs}`]: !!xs,
          [`col-sm-${sm}`]: !!sm,
          [`col-md-${md}`]: !!md,
          [`col-lg-${lg}`]: !!lg,
          [`col-xl-${xl}`]: !!xl,
          [`col-ul-${ul}`]: !!ul,
          [`col-start-${start}`]: typeof start === 'number',
          [`order-${order}`]: typeof order === 'number' || order === 'first' || order === 'last'
        },
        typeof start !== 'number' && {
          [`col-start-${start?.xs}`]: start?.xs,
          [`col-start-sm-${start?.sm}`]: start?.sm,
          [`col-start-md-${start?.md}`]: start?.md,
          [`col-start-lg-${start?.lg}`]: start?.lg,
          [`col-start-xl-${start?.xl}`]: start?.xl,
          [`col-start-ul-${start?.ul}`]: start?.ul
        },
        typeof order !== 'number' && order !== 'first' && order !== 'last' && {
          [`order-${order?.xs}`]: order?.xs,
          [`order-sm-${order?.sm}`]: order?.sm,
          [`order-md-${order?.md}`]: order?.md,
          [`order-lg-${order?.lg}`]: order?.lg,
          [`order-xl-${order?.xl}`]: order?.xl,
          [`order-ul-${order?.ul}`]: order?.ul
        }
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Col;
