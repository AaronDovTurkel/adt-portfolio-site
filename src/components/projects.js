import React from 'react';
import {connect} from 'react-redux';

import ProjectCard from './projectCard';

import './projects.css';

export class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectNumb: 0,
            projectInfo: {
                theTalmudicClock: 'The "Talmudic Clock App" is a modern sun-dial designed to display the hour of the day as calculated in Jewish law with reference to the varying lengths of the days and nights. It also allows you to list Jewish prayer times.',
                myDesignBook: '"My Design Book" is in its humble beginnings but has lofty goals. We hope to make waves in the design world by creating a socially adept system for designers to find home owners and visa versa. Not only will this app connect people but it will also be the home base for all design needs. Whether you would like to set up a calendar, send an invoice, or store room dimensions "My Design Book" will have it all.',
                thePoetryPocket: 'Welcome to "The Poetry Pocket", a place for different communities to come together and share ideas by creating a cohesive poem. "The Poetry Pocket" is in its humble beginnings but has lofty goals. We hope to make the world a bit more peaceful stanza by stanza. With different people contributing from around the world, ideals will be tested, relationships wrought, and preconcieved notions broken.'
            }
        };

    }

    incrementProjectNumb() {
        this.setState({
            projectNumb: this.state.projectNumb + 1
        });
    }

    decrementProjectNumb() {
        this.setState({
            projectNumb: this.state.projectNumb - 1
        });
    }

    render() {
        if (this.state.projectNumb === 0) {
            return (
            
                <div className="projects">
                    <ProjectCard projectTitle="The Talmudic Clock" projectInfo={this.state.projectInfo.theTalmudicClock} projectImageOne="https://raw.githubusercontent.com/AaronDovTurkel/TalmudicClockApp/master/project_images/analog_clock.png" projectImageTwo="https://raw.githubusercontent.com/AaronDovTurkel/TalmudicClockApp/master/project_images/settings_list_small_cropped.png"/>
                    <div className="buttonRemote">
                        <button className="backButton">Back</button>
                        <button className="nextButton" onClick={() => this.incrementProjectNumb()}>Next</button>
                    </div>
                </div>
            );
        } else if (this.state.projectNumb === 1) {
            return (
            
                <div className="projects">
                    <ProjectCard projectTitle="My Design Book"  projectInfo={this.state.projectInfo.myDesignBook} projectImageOne="../imgStore/myDesignBookMain.png" projectImageTwo="https://raw.githubusercontent.com/AaronDovTurkel/my_design_book/master/public/img_store/mdb_logo.png"/>
                    <div className="buttonRemote">
                        <button className="backButton" onClick={() => this.decrementProjectNumb()}>Back</button>
                        <button className="nextButton" onClick={() => this.incrementProjectNumb()}>Next</button>
                    </div>
                </div>
            );
        } else if (this.state.projectNumb === 2) {
            return (
            
                <div className="projects">
                    <ProjectCard projectTitle="The Poetry Pocket" projectInfo={this.state.projectInfo.thePoetryPocket} projectImageOne="" projectImageTwo=""/>
                    <div className="buttonRemote">
                        <button className="backButton" onClick={() => this.decrementProjectNumb()}>Back</button>
                        <button className="nextButton">Next</button>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Projects);