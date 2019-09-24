import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <div className="note">
        <span>{this.props.note.text}</span>
      </div>
    )
  }
}

export default Note;