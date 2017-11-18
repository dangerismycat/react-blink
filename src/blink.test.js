import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Blink, { toggleBlinkProp } from './blink';


describe('Blink', () => {
  it('works with an interval prop', () => {
    const props = { interval: 1000 };

    const wrapper = mount(<Blink {...props} />);

    it('renders without blowing up', () => {
      expect(wrapper.exists()).toBeTruthy();
    });

    it('matches previous snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  it('works without an interval prop', () => {
    const wrapper = mount(<Blink />);

    it('renders without blowing up', () => {
      expect(wrapper.exists()).toBeTruthy();
    });

    it('matches previous snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});


describe('toggleBlinkProp', () => {
  const testState = { on: false };

  it('flips the state boolean correctly', () => {
    expect(toggleBlinkProp(testState).on).toBeTruthy();
  });

  it('handles multiple consecutive flips correctly', () => {
    const state = toggleBlinkProp(toggleBlinkProp(toggleBlinkProp(toggleBlinkProp(testState))));
    expect(state.on).toBeFalsy();
  });
});
