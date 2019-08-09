import React from 'react';
import {shallow} from 'enzyme';

import { Connect } from './connect';

describe('<Connect />', () => {
    
    it('Renders without crashing', () => {
        shallow(<Connect />);
    });

});