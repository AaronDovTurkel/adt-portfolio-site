import React from 'react';
import {connect} from 'react-redux';

import './projectCard.css';


export class ProjectCard extends React.Component {


    render() {
        return (
            <div className="projectCard">
                <div className="projectTitle">
                    <a target="_blank" rel="noopener noreferrer" href={this.props.href}> {this.props.projectTitle} </a>
                    <a target="_blank" rel="noopener noreferrer" href={this.props.gitHub}><img className="gitImg" src="https://raw.githubusercontent.com/AaronDovTurkel/adt-portfolio-site/master/src/imgStore/GitHub-Mark-Light-32px.png" alt="Smiley face" /></a>
                </div>
                {this.props.tech}
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