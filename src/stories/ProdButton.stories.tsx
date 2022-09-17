import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '../components/Button'

export default {
  title: 'PROD/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>BUTTONS</Button>
)

export const Origin = Template.bind({})

Origin.args = {
  className: '',
}
