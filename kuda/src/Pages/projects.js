import React, { Component } from 'react'
import ButtonAppBar from '../components/navbar'
import ProjectSurface from '../components/projectSurface'
import fav from '../images/jason.png'
import Favicon from 'react-favicon';


export class Projects extends Component {
    render() {
        return (
            <div>
                <Favicon url={fav} />
                <ButtonAppBar />
                <ProjectSurface />
            </div>
        )
    }
}

export default Projects