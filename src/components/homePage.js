import React from 'react';
import {connect} from 'react-redux';

import Projects from './projects';

import './homePage.css';

export class HomePage extends React.Component {


    render() {
        return (
            //TODO: create page that will insert diff components... i.e. projects, services, experience, info, connect, idea board
            <div className="homePage">
                {/* <Info /> */}
                <Projects />
                {/* <Experience /> */}
                {/* <Connect /> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HomePage);