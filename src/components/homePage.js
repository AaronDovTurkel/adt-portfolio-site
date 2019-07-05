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
    constructor(props) {
        super(props);
        this.info = React.createRef();
        this.scrollToInfo = this.scrollToInfo.bind(this);
        this.projects = React.createRef();
        this.scrollToProjects = this.scrollToProjects.bind(this);
        this.exp = React.createRef();
        this.scrollToExp = this.scrollToExp.bind(this);
        this.at = React.createRef();
        this.scrollToAt = this.scrollToAt.bind(this);
    }

    scrollToInfo() {
        this.info.current.scrollIntoView({behavior: "smooth"});
    }

    scrollToProjects() {
        this.projects.current.scrollIntoView({behavior: "smooth"});
    }

    scrollToExp() {
        this.exp.current.scrollIntoView({behavior: "smooth"});
    }

    scrollToAt() {
        this.at.current.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <div className="homePage">
                <Nav 
                onScrollToLink={() => this.scrollToInfo()}
                scrollProjects={() => this.scrollToProjects()}
                scrollExp={() => this.scrollToExp()}
                scrollAt={() => this.scrollToAt()}
                />
                <LandingScreen />
                <div className="content-block">
                    <div ref={this.info}><Info ref={this.info} /></div>
                    <div ref={this.projects}><Projects ref="projectRef" /></div>
                    <div ref={this.exp}><Experience ref="experienceRef" /></div>
                    <div ref={this.at}><Connect ref="connectRef" /></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HomePage);