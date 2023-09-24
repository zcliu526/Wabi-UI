import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
//import WelcomeMDX from '../Welcome/Welcome.stories.mdx'
import Button from './button'

// https://github.com/storybookjs/storybook/issues/15574
export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs']
  // parameters: {
  //   docs: {
  //     page: WelcomeMDX
  //   }
  // }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ADefault = Template.bind({})
ADefault.args = {
  children: 'Default Button',
}
ADefault.storyName = 'Default Button'

export const BButtonWithSize = () => (
  <>
    <Button size="lg"> Large Button </Button>
    <br></br>
    <Button size="sm"> Small Button </Button>
  </>
)
BButtonWithSize.storyName = 'Buttons with different sizes'

export const CButtonWithType = () => (
  <>
    <Button btnType="primary"> Primary Button </Button>
    <br></br>
    <Button btnType="danger"> Danger Button </Button>
    <br></br>
    <Button btnType="link" href="javascript:;" onClick={() => alert('This is a Link Button')}> Link </Button>
  </>
)

CButtonWithType.storyName = 'Buttons with different types'