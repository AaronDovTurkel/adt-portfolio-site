import React from 'react';
import {connect} from 'react-redux';

import './nav.css';

export class Nav extends React.Component {


    render() {
        return (
            <div className="nav" >
                <img className="navLogo spinner" src="https://raw.githubusercontent.com/AaronDovTurkel/adt-portfolio-site/master/src/imgStore/HCFinalLogo.png" alt="H" />
                <ul className="navList">
                    <li onClick={() => this.props.onScrollToLink()} className="navListItem infoItem">Info</li>
                    <li onClick={() => this.props.scrollProjects()} className="navListItem apps">Projects</li>
                    <li onClick={() => this.props.scrollExp()} className="navListItem exp">Experience</li>
                    <li onClick={() => this.props.scrollAt()} className="navListItem at">Connect</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Nav);