import React from 'react';
import { mount } from 'enzyme'; // mimic the mounting of the component onto the DOM
import Note from './Note';

const props = { note: { text: 'test text' }}

describe('Note', () => {
  let note = mount(<Note {...props}/>);

  it('renders the test text', () => {
   // console.log(note.debug()); a bit like pry
    expect(note.find('span').text()).toEqual(props.note.text);
  });
})
