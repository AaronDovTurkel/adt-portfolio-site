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
                    <img className="navHalfLogoOne" src="https://raw.githubusercontent.com/AaronDovTurkel/adt-portfolio-site/master/src/imgStore/HCLogoTwo.png" alt="H" />
                </div>
            );
        } else {
            return (
                <div className="nav" onMouseEnter={() => this.onHover()} onMouseLeave={() => this.onLeave()}>
                    <img className="navHalfLogoOne" src="https://raw.githubusercontent.com/AaronDovTurkel/adt-portfolio-site/master/src/imgStore/HCLogoTwo.png" alt="H" />
                </div>
            );
        }
        
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Nav);