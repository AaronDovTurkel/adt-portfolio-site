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
                    <p>
                        I am a budding young full-stack developer interested in new technology, critical reading, and self-improvement.
                        I have worked as a waiter, teacher, project manager, entitlement specialist, etc...
                        I have spent years studying the literary canon from classical to religious, developing a mature and comprehensive world view.
                    </p>
                    <p>
                        I now am launching my long-term career as an innovative developer hoping to improve how we interact with the technological world.
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Info);