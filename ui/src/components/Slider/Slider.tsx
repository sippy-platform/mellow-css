import React, { useState } from "react";
import "@sippy/mellow-css/dist/css/mellow.css";

import * as SliderPrimitives from '@radix-ui/react-slider';

import clsx from "clsx";

export interface SliderProps {
  /**
   * Value of the input
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Minimum value of the input
   */
  min?: number;
  /**
   * Maximum value of the input
   */
  max?: number;
  /**
   * Steps between values on the range
   */
  step?: number;
  /**
   * The minimum permitted steps between thumbs
   */
  minStepsBetweenThumbs?: number;
  /**
   * Value of the input
   */
  value?: number[] | number;
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
  orientation = 'horizontal',
  min = 0,
  max = 100,
  step = 1,
  value = [0],
  minStepsBetweenThumbs = 0,
  ...props
}: SliderProps) => {
  const [curValue, setValue] = useState(value);

  return (
    <SliderPrimitives.Root
      orientation={orientation}
      min={min}
      max={max}
      step={step}
      minStepsBetweenThumbs={minStepsBetweenThumbs}
      value={Array.isArray(curValue) ? curValue : [curValue]}
      onValueChange={setValue}
      className={clsx(
        'input-slider',
        className
      )}
      {...props}
    >
      <SliderPrimitives.Track className="track">
        <SliderPrimitives.Range className="range" />
      </SliderPrimitives.Track>
      <SliderPrimitives.Thumb className="thumb" />
      {(Array.isArray(curValue) && curValue.length === 2) && <SliderPrimitives.Thumb className="thumb" />}
    </SliderPrimitives.Root>
  );
};

export default Slider;
