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
                    <p>
                        I am a budding young full-stack developer interested in new technology, critical reading, and self-improvement.	
                    </p>
                    <p>
                        I have spent years deciphering talmudic and classical literature under the tutelage of Rabbinic and literary scholars. My time in the literary world gave me a deep understanding of how language functions at its core. For the past two years I have transitioned that knowledge and devoted myself to the study of computer language.
                    </p>
                    <p>
                        Having developed a proficiency in everything from HTML/CSS to React/Redux, my web apps are highly scalable with sleek front-ends and structural back-ends.
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Info);