import React from 'react';
import {shallow} from 'enzyme';

import { Experience } from './experience';

describe('<Experience />', () => {
    
    it('Renders without crashing', () => {
        shallow(<Experience />);
    });

});