import React from 'react';
import {connect} from 'react-redux';

import './homePage';

export class HomePage extends React.Component {


    render() {
        return (
            //TODO: create page that will insert diff components... i.e. projects, services, experience, info, connect, idea board
            <div className="HomePage">
                <h1 className="pageHeader">Profile</h1>
                <div className="betaAlertPage"><p>We're sorry but this app is still in its beta version.</p><p>The "Profile" functionality will allow you to view and edit your profile info.</p></div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HomePage);