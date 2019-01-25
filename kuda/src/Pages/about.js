import React, { Component } from 'react'
import ButtonAppBar from '../components/navbar';
import PaperAbout from '../components/paperAbout';
import fav from '../images/jason.png'
import Favicon from 'react-favicon';

export class About extends Component {
    render() {
        return (
            <div>
                <Favicon url={fav} />
                <ButtonAppBar />
                <PaperAbout />
            </div>
        )
    }
}

export default About
