import React from 'react';
import {connect} from 'react-redux';

import './connect.css';

export class Connect extends React.Component {


    render() {
        return (
            //TODO: create page that will insert diff components... i.e. projects, services, experience, info, connect, idea board
            <div className="connect">
                <h2 className="pageHeader">Connect</h2>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Connect);