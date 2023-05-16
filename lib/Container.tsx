import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode,
  classNames: string;
}

export default function Container({ children, classNames }: ContainerProps) {
  return (
    <div className={classNames}>
      {children}
    </div>
  );
}
