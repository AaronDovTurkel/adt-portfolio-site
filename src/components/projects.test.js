import React from 'react';
import {shallow} from 'enzyme';

import {Projects} from './projects';

describe('<Projects />', () => {
    
    it('Renders without crashing', () => {
        shallow(<Projects />);
    });

});