import React, { ReactNode } from "react";
import "../mellow.css";

import clsx from "clsx";

export interface ProgressProps {
  /**
   * The lowest value on the progress bar
   */
  min?: number;
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
  min = 0,
  max = 100,
  value = 0,
  className,
  ...props
}: ProgressProps) => {
  return (
    <div
      className={clsx(
        'progress',
        className
      )}
      {...props}
    >
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        style={{
          width: `${value}%`
        }}
      />
    </div>
  );
};

export default Progress;
