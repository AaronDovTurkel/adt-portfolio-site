import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';

import './app.css';


export class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="app">
                    <header></header>
                    <main>                      
                        <Route exact path="/" component={} /> 
                    </main>
                    <footer></footer>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(App));
