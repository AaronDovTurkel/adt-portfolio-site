import React from 'react';
import {connect} from 'react-redux';

import './experience.css';

export class Experience extends React.Component {


    render() {
        return (
            //TODO: create page that will insert diff components... i.e. projects, services, experience, info, connect, idea board
            <div className="experience">
                <h2 className="pageHeader">Experience</h2>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Experience);