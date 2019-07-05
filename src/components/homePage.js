import React from 'react';
import {connect} from 'react-redux';

import Nav from './nav';
import LandingScreen from './landingScreen';
import Info from './info';
import Projects from './projects';
import Experience from './experience';
import Connect from './connect';

import './homePage.css';

export class HomePage extends React.Component {


    render() {
        return (
            <div className="homePage">
                <Nav />
                <LandingScreen />
                <div className="content-block">
                    <Info />
                    <Projects />
                    <Experience />
                    <Connect />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HomePage);