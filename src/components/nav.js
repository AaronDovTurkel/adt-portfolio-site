import React from 'react';
import {connect} from 'react-redux';

import './nav.css';

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };

    }

    onHover() {
        this.setState({
            hover: true
        });
    }

    onLeave() {
        this.setState({
            hover: false
        });
    }

    render() {
        if (this.state.hover) {
            return (
                <div className="nav" onMouseEnter={() => this.onHover()} onMouseLeave={() => this.onLeave()}>
                    {/* <img className="holyCodeLogo" src="" alt="HC" /> */}
                    <div className="typewriter"> 
                        <img className="navHalfLogoOne" src="" alt="H" /> 
                        <div className="typeWriterTxt"> 
                            Holy Code
                        </div>
                        <img className="navHalfLogoTwo" src="" alt="C" />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="nav" onMouseEnter={() => this.onHover()} onMouseLeave={() => this.onLeave()}>
                    <img className="navHalfLogoOne" src="" alt="H" />  
                    <img className="navHalfLogoTwo" src="" alt="C" />
                </div>
            );
        }
        
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Nav);