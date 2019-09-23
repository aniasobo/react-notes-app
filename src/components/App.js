import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <div>
        <h2>Notes</h2>
          <Form>
            <FormControl onChange={event => this.setState({ text: event.target.value })} /> 
            <Button onClick={() => console.log(this.state)}>Add note</Button>
          </Form>
      </div>
    )
  }
}

export default App; // import this without {} 