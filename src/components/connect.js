import React from 'react';
import {connect} from 'react-redux';

import './connect.css';

export class Connect extends React.Component {


    render() {
        return (
            <div className="connect">
                    <h2>Connect</h2>
                    <div className="connectLinks">
                        <a href="mailto:theholycoder@gmail.com">Email</a>
                        <a href="https://twitter.com/TheHolyCoder">Twitter</a>
                        <a href="https://wordpress.com/stats/day/theholycoder.code.blog">Blog</a>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Connect);