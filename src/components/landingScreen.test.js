import React from 'react';
import {shallow} from 'enzyme';

import { LandingScreen } from './landingScreen';

describe('<LandingScreen />', () => {
    
    it('Renders without crashing', () => {
        shallow(<LandingScreen />);
    });

});