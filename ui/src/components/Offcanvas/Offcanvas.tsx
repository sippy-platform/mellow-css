import React, { ReactNode } from 'react';

import * as DialogPrimitives from '@radix-ui/react-dialog';

import clsx from 'clsx';

export interface OffcanvasProps {
  /**
   * Disable the modal behavior en allow for external interaction
   */
  disableModal?: boolean;
  /**
   * Position
   */
  position?: 'start' | 'end';
  /**
   * Custom classes for the dialog
   */
  className?: string;
  /**
   * The react node that will open the dialog
   */
  trigger: ReactNode;
  /**
   * The contents of the dialog
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Offcanvas = ({
  className,
  trigger,
  children,
  disableModal = false,
  position = 'start',
  ...props
}: OffcanvasProps) => {
  return (
    <DialogPrimitives.Root
      modal={!disableModal}
      {...props}
    >
      <DialogPrimitives.Trigger asChild>
        {trigger}
      </DialogPrimitives.Trigger>
      <DialogPrimitives.Portal>
        <DialogPrimitives.Overlay className="backdrop" />
        <DialogPrimitives.Content
          className={clsx(
            'offcanvas show',
            `offcanvas-${position}`,
            className
          )}
        >
          {children}
        </DialogPrimitives.Content>
      </DialogPrimitives.Portal>
    </DialogPrimitives.Root>
  );
};

export default Offcanvas;
