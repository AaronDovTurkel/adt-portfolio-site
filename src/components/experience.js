import React from 'react';
import {connect} from 'react-redux';

import './experience.css';

export class Experience extends React.Component {


    render() {
        return (
            <div className="experience">
                <div className="leftCol">
                    <h2>Skills</h2>
                </div>
                <ul className="rightCol">
                    <li>HTML, CSS</li>
                    <li>JavaScript, Node.js, JQuery, React, Redux</li>
                    <li>MongoDB, Mongoose, Mlab, Atlas</li>
                    <li>Git, GitHub</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Experience);