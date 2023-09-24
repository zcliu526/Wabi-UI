import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tabs from './tabs'
import TabItem from './tabItem'
import Icon from '../Icon'
export default {
  title: 'Tabs',
  id: 'Tabs',
  component: Tabs,
  subcomponents: { 'TabItem': TabItem },
  tags: ['autodocs']
} as ComponentMeta<typeof Tabs>

export const ADefaultTabs: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <TabItem label="Tab1">This is Tab1</TabItem>
    <TabItem label="Tab2">This is Tab2</TabItem>
    <TabItem label="Tab3">This is Tab3</TabItem>
  </Tabs>
)
ADefaultTabs.storyName = 'Default Tabs'
export const BCardTabs: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args} type="card">
    <TabItem label='Card1'>This is Card One</TabItem>
    <TabItem label="Card2">This is Card Two</TabItem>
    <TabItem label="disabled" disabled>This is Card Three</TabItem>
  </Tabs> 
)
BCardTabs.storyName = 'Tabs - Card Style'
export const CCustomTabs: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args} type="card">
    <TabItem label={<><Icon icon="check-circle" />  Custom Icon</>}>This is Tab One</TabItem>
    <TabItem label="Tab2">This is Tab Two</TabItem>
  </Tabs> 
)
CCustomTabs.storyName = 'Tabs - Custom Icon'
