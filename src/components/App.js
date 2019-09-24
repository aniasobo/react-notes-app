import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      notes: []
    }
  }

  submit() {
    const { notes, text } = this.state;

    notes.push({ text });

    this.setState({ notes });
  }

  render() {
    return (
      <div>
        <h2>Notes</h2>
          <Form inline>
            <FormControl onChange={event => this.setState({ text: event.target.value })} /> 
            {' '}
            <Button onClick={() => this.submit()}>Add note</Button>
          </Form>
          {
            this.state.notes.map((note, index) => {
              return (
                <div key={index}>{note.text}</div>
              )
            })
          }
      </div>
    )
  }
}

export default App; // import this without {} 