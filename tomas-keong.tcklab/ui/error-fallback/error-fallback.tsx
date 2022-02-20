import React, { ReactNode } from 'react';

export type ErrorFallbackProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function ErrorFallback({ children }: ErrorFallbackProps) {
  return (
    <div>
      {children}
    </div>
  );
}
