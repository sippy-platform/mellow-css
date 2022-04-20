import React from "react";
import "../mellow.css";

import * as SliderPrimitives from '@radix-ui/react-slider';

import clsx from "clsx";

export interface SliderProps {
  /**
   * Value of the input
   */
  value?: string;
  /**
   * Custom classes for the label
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Slider = ({
  className,
  value,
  ...props
}: SliderProps) => {
  return (
    <SliderPrimitives.Root
      className={clsx(
        'input-slider',
        className
      )}
    >
      <SliderPrimitives.Track className="track">
        <SliderPrimitives.Range className="range" />
      </SliderPrimitives.Track>
      <SliderPrimitives.Thumb className="thumb" />
    </SliderPrimitives.Root>
  );
};

export default Slider;
