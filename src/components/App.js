import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Notes</h2>
          <Form>
            <FormControl /> 
            <Button>Add note</Button>
          </Form>
      </div>
    )
  }
}

export default App; // import this without {} 