import React, { FC } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  /** Display different colors based on themes */
  theme? : ThemeProps
}

/**
 * Provide icon sets based on **'react-fontawesome'**.
 * 
 * Support all properties of **'react-fontawesome'**. More info: https://github.com/FortAwesome/react-fontawesome#basic
 * 
 * Support all **'free-solid-icons'** from **'fontawesome'**. More info: https://fontawesome.com/icons?d=gallery&s=solid&m=free
 * ### Usage
 * 
 * ~~~js
 * import { Icon } from 'wabi-ui'
 * ~~~
 */
export const Icon: FC<IconProps> = (props) => {
  // icon-primary
  const { className, theme, ...restProps } = props
  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

export default Icon;