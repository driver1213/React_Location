import React, { Component } from 'react'

class ProjectItem extends Component {
  render() {
    return (
      <li>
        {this.props.project.title}
        {this.props.project.category}
        <button onClick={()=>{this.props.onDelete(this.props.project.id)}}>X</button>
      </li>
    )
  }
}

export default ProjectItem
