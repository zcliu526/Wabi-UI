import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'


import Alert from './alert'

export default { 
  title: 'Alert',
  id: 'Alert',
  component: Alert,
  tags: ['autodocs']
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const ADefaultAlert = Template.bind({})
ADefaultAlert.args = {
  title: 'This is alert!'
}
ADefaultAlert.storyName = 'Default Alert'
export const CDescAlert = Template.bind({})
CDescAlert.args = {
  title: 'Title',
  description: 'This is a long description'
}
CDescAlert.storyName = 'Alert - Description'
export const BStylesAlert = () => {
  return (
    <>
      <Alert title="Success!" type="success"></Alert>
      <Alert title="Danger!" type="danger"></Alert>
      <Alert title="Warning!" type="warning" closable={false}></Alert>
    </>
  )
}
BStylesAlert.storyName = 'Alert - Different Styles'