import React from 'react';
import {connect} from 'react-redux';

import './connect.css';

export class Connect extends React.Component {


    render() {
        return (
            <div className="connect">
                    <h2>Connect</h2>
                    <p>I am looking for a tight-knit community of coders. I have big ideas, but I am ready to start small.</p>
                    <div className="connectLinks">
                        <a target="_blank" rel="noopener noreferrer" href="mailto:theholycoder@gmail.com">Email</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/TheHolyCoder">Twitter</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://wordpress.com/stats/day/theholycoder.code.blog">Blog</a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/AaronDovTurkel">GitHub</a>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Connect);