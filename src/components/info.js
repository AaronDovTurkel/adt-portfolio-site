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
                    <p>kejbfewhbdwendiwnediunediuwe, wjhebuwibed wjenwueybd2 iwhebduhb jwhbeuwb wibei 2euhdwiuehdwieu. iebfuywbewebfwhebfwm iwue iwuehf uh wiefw iwhe fwefihb wiwefijbwef hbwef ihbwefwejbwef.</p>
                    <p>kejbfewhbdwendiwnediunediuwe, wjhebuwibed wjenwueybd2 iwhebduhb jwhbeuwb wibei 2euhdwiuehdwieu. iebfuywbewebfwhebfwm iwue iwuehf uh wiefw iwhe fwefihb wiwefijbwef hbwef ihbwefwejbwef.</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Info);