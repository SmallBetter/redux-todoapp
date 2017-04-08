/* eslint-disable react/prop-types,jsx-a11y/href-no-hash */
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import TodoInput from '../component'

const props = {
  addTodo: action('addTodo')
}

storiesOf('TodoInput', module)
  .addDecorator(story => <div style={{ width: '95%', textAlign: 'center', marginTop: '50px' }}>{story()}</div>)
  .addWithInfo('default', '', () => (
    <TodoInput {...props} />
  ))
