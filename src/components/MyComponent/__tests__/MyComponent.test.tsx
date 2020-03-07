import React from 'react';
import { shallow } from 'enzyme';
import { MyComponent } from '../MyComponent';

describe('MyComponent', () => {
    test('Render a h1 element', () => {
        const wrapper = shallow(<MyComponent name="you" />);
        expect(wrapper.find('h1').length).toBe(1);
    });
});
