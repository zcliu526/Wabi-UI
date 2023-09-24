import React, { FC, useState, createContext, useRef, FunctionComponentElement, useEffect, ReactNode } from 'react'
import classNames from 'classnames'
import Input from '../Input'
import Icon from '../Icon'
import useClickOutside from '../../hooks/useClickOutside'
import Transition from '../Transition/transition'
import { SelectOptionProps } from './option'

export interface SelectProps {
  /**Default value: string or string array*/
  defaultValue?: string | string[];
  /** placeholder*/
  placeholder?: string;
  /** Disabled?*/
  disabled?: boolean;
  /** Multiple selection*/
  multiple?: boolean;
  /** select input's name property	 */
  name?: string;
  /**Change when selectedValue changes */
  onChange?: (selectedValue: string, selectedValues: string[]) => void;
  /**Triggered when visiblity changes */
  onVisibleChange?: (visible: boolean) => void;
  children?: ReactNode;
}

export interface ISelectContext {
  onSelect?: (value: string, isSelected?: boolean) => void;
  selectedValues: string[];
  multiple?: boolean;
}

export const SelectContext = createContext<ISelectContext>({ selectedValues: []})
/**
 * Dropdown Select
 * 
 * ### Usage
 * 
 * ~~~js
 * import { Select } from 'wabi-ui'
 * // Provide <Select> and <Select.Option>
 * ~~~
 */
export const Select:FC<SelectProps> = (props) => {
  const {
    defaultValue,
    placeholder,
    children,
    multiple,
    name,
    disabled,
    onChange,
    onVisibleChange,
  }= props
  const input = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLInputElement>(null)
  const containerWidth = useRef(0)
  const [ selectedValues, setSelectedValues ] = useState<string[]>(Array.isArray(defaultValue)? defaultValue :[])
  const [ menuOpen, setOpen ] = useState(false)
  const [ value, setValue ] = useState(typeof defaultValue === 'string' ? defaultValue : '')
  const handleOptionClick = (value: string, isSelected?: boolean) => {
    // update value
    if (!multiple) {
      setOpen(false)
      setValue(value)
      if (onVisibleChange) {
        onVisibleChange(false)
      }
    } else {
      setValue('')
    }
    let updatedValues = [value]
    // click again to remove selected when is multiple mode
    if (multiple) {
      updatedValues = isSelected ? selectedValues.filter((v) => v !== value) :  [...selectedValues, value]
      setSelectedValues(updatedValues)
    } 
    if(onChange) {
      onChange(value, updatedValues)
    }

  }
  useEffect(() => {
    // focus input
    if (input.current) {
      input.current.focus()
      if (multiple && selectedValues.length > 0) {
        input.current.placeholder = ''
      } else {
        if (placeholder) input.current.placeholder = placeholder
      }
    }
  }, [selectedValues, multiple, placeholder])
  useEffect(() => {
    if (containerRef.current) {
      containerWidth.current = containerRef.current.getBoundingClientRect().width
    }
  })
  useClickOutside(containerRef, () => { 
    setOpen(false)
    if (onVisibleChange && menuOpen) {
      onVisibleChange(false)
    }
  })
  const passedContext: ISelectContext = {
    onSelect: handleOptionClick,
    selectedValues: selectedValues,
    multiple: multiple,
  }
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!disabled) {
      setOpen(!menuOpen)
      if (onVisibleChange) {
        onVisibleChange(!menuOpen)
      }
    }

  }
  const generateOptions = () => {
    return React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<SelectOptionProps>
      if (childElement.type.displayName === 'Option') {
        return React.cloneElement(childElement, {
          index: `select-${i}`
        })
      } else {
        console.error("Warning: Select has a child which is not a Option component")
      }
    })
  }
  const containerClass = classNames('viking-select', {
    'menu-is-open': menuOpen,
    'is-disabled': disabled,
    'is-multiple': multiple,
  })
  return (
    <div className={containerClass} ref={containerRef}>
      <div className="viking-select-input" onClick={handleClick}>
        <Input
          ref={input}
          placeholder={placeholder} 
          value={value} 
          readOnly 
          icon="angle-down"
          disabled={disabled}
          name={name}
        />
      </div>
      <SelectContext.Provider value={passedContext}>
        <Transition
            in={menuOpen}
            animation="zoom-in-top"
            timeout={300}
          >
          <ul className="viking-select-dropdown">
            {generateOptions()}
          </ul>
        </Transition>
      </SelectContext.Provider>
      {multiple &&
        <div className="viking-selected-tags" style={{maxWidth: containerWidth.current - 32}}> 
          {
            selectedValues.map((value, index) => {
              return (
                <span className="viking-tag" key={`tag-${index}`}>
                  {value}
                  <Icon icon="times" onClick={() => {handleOptionClick(value, true)}} />
                </span>
              )
            })
          }
        </div>
      }

    </div>
  )
}
Select.defaultProps = {
  name: 'wabi-select',
  placeholder: 'Please Select an option'
}
export default Select;