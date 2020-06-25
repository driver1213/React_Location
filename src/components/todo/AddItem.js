import React, { Component } from 'react'

class AddItem extends Component {
  render() {
    return (
      <>
        <input type="text" value={this.props.inputText} onChange={this.props.inputChange} />

        <button onClick={this.props.addItem}>Add Task</button>
      </>
    )
  }
}

export default AddItem
