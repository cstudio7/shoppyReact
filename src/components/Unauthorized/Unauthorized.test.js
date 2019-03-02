import React from 'react';
import { shallow } from 'enzyme';
import Unauthorized from './index';

describe('Test the Unauthorized Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Unauthorized />);
    expect(wrapper).toMatchSnapshot();
  });
});
