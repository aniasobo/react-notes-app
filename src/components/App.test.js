import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let app = mount(<App />);

  it('Renders App title', () => {
   // console.log(app.debug());
   expect(app.find('h2').text()).toEqual('My Ephemeral Local Storage Notes')
  });

  it('renders the Clear button', () => {
    expect(app.find('.btn').at(1).text()).toEqual('Clear Notes')
  });

  describe('When rendering the form', () => {
    it('Creates a correct form', () => {
      expect(app.find('Form').exists()).toBe(true);
    });

    it('Renders a FormControl component', () => {
      expect(app.find('FormControl').exists()).toBe(true);
    });

    it('renders Submit button', () => {
      expect(app.find('.btn').at(0).text()).toEqual('Add note')
    });
  });
});