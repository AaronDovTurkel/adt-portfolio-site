import React from 'react';
import {connect} from 'react-redux';

import './info.css';

export class Info extends React.Component {


    render() {
        return (
            <div className="info">
                <div className="leftCol">
                    <h2>Info</h2>
                </div>
                <div className="rightCol">
                    <p>Born and raised in Queens, New York, I always was a questioner. I started to analayze books, everything from secular to sacred. I majored in English Lit and spent years studying the Talmud.</p>
                    <p>I researched language theory and learnt valuable lessons on how langauge works. Those lessons brought me to the world of code and computers.</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Info);