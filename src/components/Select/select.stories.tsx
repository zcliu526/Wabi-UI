import React from 'react'
import { ComponentMeta } from '@storybook/react'


import Select from './index'
export default {
  title: 'Select',
  component: Select,
  id: 'Select',
  subcomponents: { 'Option': Select.Option },
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs']
} as ComponentMeta<typeof Select>

export const ADefaultSelect = (args: any) => (
  <Select
    {...args}
    placeholder="Please select"
  >
    <Select.Option value="Item1" />
    <Select.Option value="Item2" />
    <Select.Option value="Item3" />
    <Select.Option value="disabled" disabled/>
    <Select.Option value="Item5" />
  </Select>
)
ADefaultSelect.storyName = 'Default Select'
export const BMultipleSelect = (args: any) => (
  <Select
    {...args}
    placeholder="Multiple Select"
    multiple
  >
    <Select.Option value="Item1" />
    <Select.Option value="Item2" />
    <Select.Option value="Item3" />
    <Select.Option value="Item4" />
    <Select.Option value="Item5" />
  </Select>
)
BMultipleSelect.storyName = 'Multiple Select'
export const CDisabledSelect = (args: any) => (
  <Select
    {...args}
    placeholder="Disabled"
    disabled
  >
    <Select.Option value="Item1" />
    <Select.Option value="Item2" />
    <Select.Option value="Item3" />
  </Select>  
)
CDisabledSelect.storyName = 'Disabled Select'