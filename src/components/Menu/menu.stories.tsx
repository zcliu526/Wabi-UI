import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from './index'

export default {
  title: 'Menu',
  id: 'Menu',
  component: Menu,
  subcomponents: { 'SubMenu': Menu.SubMenu, 'Item': Menu.Item },
  tags: ['autodocs']
} as ComponentMeta<typeof Menu>

export const ADefaultMenu: ComponentStory<typeof Menu> = (args) => (
  <Menu defaultIndex='0' {...args} >
    <Menu.Item>
      Item 1
    </Menu.Item>
    <Menu.Item>
    Item 2
    </Menu.Item>
    <Menu.Item disabled>
      Disabled
    </Menu.Item> 
    <Menu.SubMenu title="Dropdowns">
      <Menu.Item>
        SubMenu 1
      </Menu.Item>
      <Menu.Item>
        SubMenu 2
      </Menu.Item>    
    </Menu.SubMenu>
  </Menu>
)
ADefaultMenu.storyName = 'Defalut Menu'
export const BClickMenu: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} defaultIndex='0' mode="vertical">
    <Menu.Item>
    Item 1
    </Menu.Item>
    <Menu.Item>
    Item 2
    </Menu.Item>
    <Menu.SubMenu title="Dropdown">
      <Menu.Item>
        SubMenu 1
      </Menu.Item>
      <Menu.Item>
        SubMenu 2
      </Menu.Item>    
    </Menu.SubMenu>
  </Menu>
)
BClickMenu.parameters = {
    backgrounds: {
        values: [
            {name: 'red', value: '#f00'}
        ]
    }
}
BClickMenu.storyName = 'Horizontal Menu'
export const COpenedMenu:ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} defaultIndex='0' mode="vertical" defaultOpenSubMenus={['2']}>
    <Menu.Item>
      Item 1
    </Menu.Item>
    <Menu.Item>
        Item 2
    </Menu.Item>
    <Menu.SubMenu title="Opened">
      <Menu.Item>
        Submenu 1
      </Menu.Item>
      <Menu.Item>
        Submenu 2
      </Menu.Item>    
    </Menu.SubMenu>
  </Menu>
)
COpenedMenu.storyName = 'Default Opened Horizontal Menu'