import React, { Component } from 'react';
import { render } from 'react-dom';
import Apps from './hooks';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Apps/>       
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
