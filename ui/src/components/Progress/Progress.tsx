import React, { ReactNode } from "react";
import * as ProgressPrimitives from '@radix-ui/react-progress';

import "../mellow.css";

import clsx from "clsx";

export interface ProgressProps {
  /**
   * The highest value on the progress bar
   */
  max?: number;
  /**
   * The current value on the progress bar
   */
  value?: number;
  /**
   * Custom classes for the progress bar
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
export const Progress = ({
  max = 100,
  value = 0,
  className
}: ProgressProps) => {
  return (
    <ProgressPrimitives.Root value={value} max={max} className={clsx('progress', className)}>
      <ProgressPrimitives.Indicator className="progress-bar" style={{ width: `${value / max * 100}%` }} />
    </ProgressPrimitives.Root>
  );
};

export default Progress;
