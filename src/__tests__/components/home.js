import React from 'react';
import {shallow} from 'enzyme';
import Home from '../../components/Home/home';

describe('render the Home section', () => {
    let wrapper;
    it('should render the home component without failing', () => {
        wrapper = shallow(<Home />)
    })
})