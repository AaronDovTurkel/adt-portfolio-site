import React from 'react';
import {connect} from 'react-redux';

import './landingScreen.css';

export class LandingScreen extends React.Component {


    render() {
        return (
            <div className="landingScreen">
                <h1>Aaron Turkel<br />Portfolio</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(LandingScreen);