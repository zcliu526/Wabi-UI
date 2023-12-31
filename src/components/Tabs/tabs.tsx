import React, { FC, useState, FunctionComponentElement, ReactNode } from 'react'
import classNames from 'classnames'
import { TabItemProps } from './tabItem'
export interface TabsProps {
  /**Current active tab, default is 0 */
  defaultIndex?: number;
  /**Extensible className */
  className?: string;
  /**When selecting tab */
  onSelect?: (selectedIndex: number) => void;
  /**Tabs styles */
  type?: 'line' | 'card';
  children?: ReactNode;
}

/**
 * Tab Component.
 * Keep the content neat.
 * ### Usage
 * 
 * ~~~js
 * import { Tabs } from 'wabi-ui'
 * ~~~
 */
export const Tabs: FC<TabsProps> = (props) => {
  const {
    defaultIndex,
    className,
    onSelect,
    children,
    type
  } = props
  const [ activeIndex, setActiveIndex ] = useState(defaultIndex)
  const handleClick = (e: React.MouseEvent, index: number, disabled: boolean | undefined) => {
    if (!disabled) {
      setActiveIndex(index)
      if (onSelect) {
        onSelect(index)
      }
    }
  }
  const navClass = classNames('viking-tabs-nav', {
    'nav-line': type === 'line',
    'nav-card': type === 'card',
  })
  const renderNavLinks = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>
      const { label, disabled } = childElement.props
      const classes = classNames('viking-tabs-nav-item', {
        'is-active': activeIndex === index,
        'disabled': disabled,
      })
      return (
        <li 
          className={classes} 
          key={`nav-item-${index}`}
          onClick={(e) => {handleClick(e, index, disabled)}}
        >
          {label}
        </li>
      )
    })
  }
  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return child
      }
    })
  }
  return (
    <div className={`viking-tabs ${className}`}>
      <ul className={navClass}>
        {renderNavLinks()}
      </ul>
      <div className="viking-tabs-content">
        {renderContent()}
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  defaultIndex: 0,
  type: 'line'
}
export default Tabs;