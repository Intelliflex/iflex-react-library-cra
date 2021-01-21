import React from 'react'

import { Button as Btn } from 'iflex-react-library'

export default {
  title: 'My Library/Button',
  component: Btn
}

const Template = (args) => <Btn {...args} />

export const Button = Template.bind({})
Button.args = {
  label: 'Sample Button'
}
