import { configure, addDecorator } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withNotes)
addDecorator(withKnobs)

const req = require.context('../src/app/components', true, /stories$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)