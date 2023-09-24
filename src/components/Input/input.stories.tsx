import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input } from './input'
export default {
  title: 'Input',
  id: 'Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs']
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />
export const ADefault = Template.bind({})
ADefault.args = {
  placeholder: 'Input'
}
ADefault.storyName = 'Default Input'
export const BDisabled = Template.bind({})
BDisabled.args = {
  placeholder: 'Disabled Input',
  disabled: true
}
BDisabled.storyName = 'Disabled Input'

export const CIcon = Template.bind({})
CIcon.args = {
  placeholder: 'Input with Icon',
  icon: 'search'
}
CIcon.storyName = 'Input - With Icon'

export const DSizeInput = () => (
  <>
    <Input
      defaultValue="Large size"
      size="lg"
    />
    <Input
      placeholder="Small size"
      size="sm"
    />
  </>
)
DSizeInput.storyName = 'Input - Different Size'
export const EPandInput = () => (
  <>
    <Input
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      defaultValue="google"
      append=".com"
    />
    
  </>
)

EPandInput.storyName = 'Input - Prefix and Suffix'

