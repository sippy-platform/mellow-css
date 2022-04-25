import React, { ReactNode, useMemo } from 'react';
import '@sippy/mellow-css/dist/css/mellow.css';
import '@optimisegroup/valkyrie/dist/valkyrie.css';

import clsx from 'clsx';

export interface ListItemProps {
  /**
   * Show a label around the list
   */
  primary: string;
  /**
   * Show the list item as active
   */
  active?: boolean;
  /**
   * If we have a href, it's an anchor.
   */
  href?: string;
  /**
   * If we have an onClick, it's an button.
   */
  onClick?: () => void;
  /**
   * The color of the list item
   */
  color?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent';
  /**
   * Theme the item fully
   */
  fullColor?: boolean;
  /**
   * Disable the list item
   */
  disabled?: boolean;
  /**
   * Custom classes for the container box
   */
  className?: string;
  /**
   * Start icon
   */
  startIcon?: ReactNode;
  /**
   * End icon
   */
  endIcon?: ReactNode;
  /**
   * Start action
   */
  startAction?: ReactNode;
  /**
   * End action
   */
  endAction?: ReactNode;
  /**
   * Children
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const ListItem = ({
  active,
  primary,
  className,
  href,
  onClick,
  color,
  fullColor,
  disabled,
  startIcon,
  endIcon,
  startAction,
  endAction,
  ...props
}: ListItemProps) => {
  const Component = useMemo(() => ((startAction || endAction) ? 'label' : (href ? 'a' : (onClick ? 'button' : 'li'))), [href, onClick, startAction, endAction]);

  return (
    <Component
      className={clsx(
        'list-item',
        {
          [`${color}`]: color,
          'active': active,
          'list-item-colored': fullColor,
          'list-item-action': !!href || !!onClick || !!startAction || !!endAction,
          'disabled': disabled
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      href={href}
      {...props}
    >
      {startAction && <span className="list-item-action-s">{startAction}</span>}
      {startIcon && <span className="list-item-icon-s">{startIcon}</span>}
      {primary && <span className="list-item-label">{primary}</span>}
      {endIcon && <span className="list-item-icon-e">{endIcon}</span>}
      {endAction && <span className="list-item-action-e">{endAction}</span>}
    </Component>
  );
};

export default ListItem;
