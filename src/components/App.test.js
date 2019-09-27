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

  describe('when creating a new note', () => {
    let testNote = 'test note';

    beforeEach(() => {
      app.find('FormControl').simulate('change', {
        target: { value: testNote }
      });
    });

    it('updates text in state', () => {
      expect(app.state().text).toEqual(testNote);
    });
    
    describe('and submitting a new note, ', () => {
      beforeEach(() => {
        app.find('.btn').at(0).simulate('click');
      });

      afterEach(() => {
        app.find('.btn').at(1).simulate('click');
      });

      it('adds the note to state', () => {
        expect(app.state().notes[0].text).toEqual(testNote);
      });

      describe('and remounting the component', () => {
        let app2;

        beforeEach(() => {
          app2 = mount(<App />);
        });

        it('reads the stored note cookies', () => {
          expect(app2.state().notes).toEqual([{ text: testNote }]);
        });
      });

      describe('and clicking the Clear button', () => {
        beforeEach(() => {
          app.find('.btn').at(1).simulate('click');
        });
        
        it('clears the notes in state', () => {
          // console.log(app.state()); to make sure the array is empty
          expect(app.state().notes).toEqual([]);
        });
      });
    });   
  });
});