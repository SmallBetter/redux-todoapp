/* eslint-disable react/prop-types,jsx-a11y/href-no-hash */
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import TodoItem from '../component'


const toggleTodo = {
  toggleTodo: action('toggleTodo')
}

const removeTodo = {
  removeTodo: action('removeTodo')
}

storiesOf('TodoItem', module)
  .addDecorator(story => <div style={{ width: '95%', textAlign: 'center', marginTop: '50px' }}>{story()}</div>)
  .addWithInfo('default', '', () => (
    <TodoItem text={'Smaillbetter'} />
  ))

  .addWithInfo('toggleTodo', '', () => (
    <TodoItem {...toggleTodo} text={'Smaillbetter'} finish={'false'} />
  ))

  .addWithInfo('removeTodo', '', () => (
    <TodoItem {...removeTodo} text={'Smaillbetter'} />
  ))