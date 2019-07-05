import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';


import HomePage from './homePage';

import './App.css';


export class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="app">
                    <main>                      
                        <Route exact path="/" component={HomePage} /> 
                    </main>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(App));
