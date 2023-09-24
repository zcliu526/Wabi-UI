import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'


import Progress from './progress'

export default { 
  title: 'Progress',
  id: 'Progress',
  component: Progress,
  tags: ['autodocs']
} as ComponentMeta<typeof Progress>

const Template: ComponentStory<typeof Progress> = (args) => <Progress {...args} />

export const ADefaultProgress = Template.bind({})
ADefaultProgress.args = {
    percent: 50,
}
ADefaultProgress.storyName = 'Default Progress';

export const BStyleProgress = Template.bind({})
BStyleProgress.args = {
    percent: 50,
    strokeHeight: 50,
    showText: true,
    theme: 'dark'
}
BStyleProgress.storyName = 'Progress - Style';

