import React, { Component } from 'react'

class TodoInput extends Component {

  state = {
    text: ''
  }

  handletext = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleEnter = event => {
    if (event.key === 'Enter' && this.state.text.length) {
      this.props.addTodo(this.state.text)
      this.setState({
        text: ''
      })
    }
  }

  render() {
    return (
      <p><input type="text" onKeyPress={this.handleEnter} value={this.state.text} onChange={this.handletext} /></p>
    )
  }
}

export default TodoInput
