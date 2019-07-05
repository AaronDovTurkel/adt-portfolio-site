import React from 'react';
import {connect} from 'react-redux';

import './projectCard.css';


export class ProjectCard extends React.Component {


    render() {
        return (
            <div className="projectCard">
                <div className="projectTitle">
                    {this.props.projectTitle}
                </div>
                <div className="projectInfo">
                    {this.props.projectInfo}
                </div>
                <div className="projectImages">
                    <img className="imgOne" src={this.props.projectImageOne} alt="Smiley face" />
                    <img className="imgTwo" src={this.props.projectImageTwo} alt="Smiley face" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ProjectCard);