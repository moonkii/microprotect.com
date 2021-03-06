import React from 'react';

import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RadioButton from './RadioButton';

jest.mock('../assets');

Enzyme.configure({ adapter: new Adapter() });

describe('RadioButton', () => {
  it('renders options', () => {
    const t = {
      form_select: 'Select!',
      form_select_1: 'Option#1',
      form_select_2: 'Option#2',
    };

    const wrapper = render(
      <RadioButton
        field={{
          name: 'select',
          options: ['1', '2'],
        }}
        t={t}
      />,
    );
    expect(wrapper.html()).toMatch('name="select"');
    expect(wrapper.text()).toMatch('Select!');
    expect(wrapper.text()).toMatch('Option#1');
    expect(wrapper.text()).toMatch('Option#2');
  });
});
