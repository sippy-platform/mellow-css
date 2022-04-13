import React, { ReactNode, useCallback } from "react";
import "../mellow.css";

import clsx from "clsx";

type ColOrder = number | 'first' | 'last';
type ColSize = number | 'full';
type ColDefinition = ColSize | { span?: ColSize, start?: number, order?: ColOrder }

interface BreakpointConfig {
  [key: string]: ColDefinition | undefined
}

export interface ColProps {
  /**
   * Column definition on the xs breakpoint
   */
  xs?: ColDefinition;
  /**
   * Column definition on the sm breakpoint
   */
  sm?: ColDefinition;
  /**
   * Column definition on the md breakpoint
   */
  md?: ColDefinition;
  /**
   * Column definition on the lg breakpoint
   */
  lg?: ColDefinition;
  /**
   * Column definition on the xl breakpoint
   */
  xl?: ColDefinition;
  /**
   * Column definition on the ul breakpoint
   */
  ul?: ColDefinition;
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
  className,
  ...props
}: ColProps) => {
  const classes = useCallback(() => {
    const spans: string[] = [];
    const starts: string[] = [];
    const orders: string[] = [];

    ['xs', 'sm', 'md', 'lg', 'xl', 'ul'].forEach((breakpoint) => {
      const breakpointConfigs: { [key: string]: ColDefinition | undefined } = { xs, sm, md, lg, xl, ul  };
      const breakpointConfig: ColDefinition | undefined = breakpointConfigs[breakpoint];

      let span: ColSize | undefined;
      let start: number | undefined;
      let order: ColOrder | undefined;

      if (typeof breakpointConfig === 'object' && breakpointConfig !== null) {
        ({ span, start, order } = breakpointConfig);
      } else {
        span = breakpointConfig;
      }

      const infix = breakpoint === 'xs' ? '' : `-${breakpoint}`;

      if (span) {
        spans.push(`col${infix}-${span}`);
      }

      if (start) {
        starts.push(`col-start${infix}-${start}`);
      }

      if (order) {
        orders.push(`order${infix}-${order}`);
      }
    });

    return clsx(...spans, ...starts, ...orders);
  }, []);

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
        {
          [`col-start-${xs?.start}`]: xs?.start,
          [`col-start-sm-${sm?.start}`]: sm?.start,
          [`col-start-md-${md?.start}`]: md?.start,
          [`col-start-lg-${lg?.start}`]: lg?.start,
          [`col-start-xl-${xl?.start}`]: xl?.start,
          [`col-start-ul-${ul?.start}`]: ul?.start
        },
        {
          [`order-${xs?.order}`]: xs?.order,
          [`order-sm-${sm?.order}`]: sm?.order,
          [`order-md-${md?.order}`]: md?.order,
          [`order-lg-${lg?.order}`]: lg?.order,
          [`order-xl-${xl?.order}`]: xl?.order,
          [`order-ul-${ul?.order}`]: ul?.order
        }
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Col;
