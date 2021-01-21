//IFLEX-REACT-LIBRARY
//STORYBOOK EXPORT FILE
//INCLUDE AND EXPORT ANY OF YOUR STORYBOOK COMPONENT TEST OR DEMOS HERE
import React from 'react'
import { About as AboutComponent } from 'iflex-react-library'

export default {
  title: 'My Library/About',
  component: AboutComponent
}
const Template = (args) => <AboutComponent {...args} />
export const About = Template.bind({})
About.args = {
  showCounter: true
}
