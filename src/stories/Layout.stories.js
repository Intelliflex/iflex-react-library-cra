import React from 'react'
import { Layout as LayoutComponent, About, Button } from 'iflex-react-library'

export default {
  title: 'My Library/Layout',
  component: LayoutComponent
}

const Template = (args) => <LayoutComponent {...args} />

export const Layout = Template.bind({})
Layout.args = {
  header: 'This is Sample Header Text',
  content: <About showCounter={true} />,
  sidebar: (
    <>
      <Button label='Test Button 1' size='large' />
      <Button label='Test Button 2' color='green' size='large' />
      <Button label='Test Button 3' color='red' size='large' />
    </>
  )
}
