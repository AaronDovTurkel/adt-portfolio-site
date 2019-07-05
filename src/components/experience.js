import React from 'react';
import {connect} from 'react-redux';

import './experience.css';

export class Experience extends React.Component {


    render() {
        return (
            <div className="experience">
                <div className="leftCol">
                    <h2>Experience</h2>
                </div>
                <ul className="rightCol">
                    <li>HTML, CSS</li>
                    <li>JavaScript, JQuery, React, Redux, Node.js</li>
                    <li>Mongo, Mongoose, Mlab</li>
                    <li>Git</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Experience);