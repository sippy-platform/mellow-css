import React from 'react';

import clsx from 'clsx';

import ValkyrieIcon, { viXmark } from '@optimisegroup/valkyrie';

export interface OffcanvasHeaderProps {
  /**
   * The function to change the open state
   */
  setOpen: (state: boolean) => void;
  /**
   * Custom classes for the dialog header
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const OffcanvasHeader = ({
  setOpen,
  className
}: OffcanvasHeaderProps) => {
  return (
    <button value="cancel" className={clsx('btn-close', className)} onClick={() => setOpen(false)}>
      <ValkyrieIcon icon={viXmark} />
    </button>
  );
};

export default OffcanvasHeader;
