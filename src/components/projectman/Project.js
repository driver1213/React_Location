import React, { Component } from 'react'
import ProjectItem from './ProjectItem'

class Project extends Component {
    render() {

    let projectItem = this.props.projects.map((projectObj)=>{
        return <ProjectItem key={projectObj.id} project={projectObj} onDelete={this.props.onDelete} />
    })

    return (
        <ul>
            {projectItem}
        </ul>
        )
    }
}

export default Project
