import { Meta, StoryObj } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Tile Default',
    description: 'Description Default'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'Hiensen',
    description: 'TypeScript, ReactJS, NesxtJS e Styled-Components'
  }
}
