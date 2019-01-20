import React, { Component } from 'react'
import ButtonAppBar from '../components/navbar'
import ProjectSurface from '../components/projectSurface'

export class Projects extends Component {
    render() {
        return (
            <div>
                <ButtonAppBar />
                <ProjectSurface />
            </div>
        )
    }
}

export default Projects