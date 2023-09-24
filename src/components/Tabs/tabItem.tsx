import React, { FC, ReactNode } from 'react'

export interface TabItemProps {
  /** Tab label */
  label: string | React.ReactElement;
  /** Tab diabled? */
  disabled?: boolean;
  children?: ReactNode;
}

export const TabItem: FC<TabItemProps> = ({ children }) => {
  return (
    <div className="viking-tab-panel">
      {children}
    </div>
  )
}

export default TabItem;