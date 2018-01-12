import React, { Component } from 'react';
import 'styles/index.css';

export default class App extends Component {

  componentDidMount() {
    this.props.updateState(
      {
        name: 'Stephanie'
      }
    );
  }

  render () {

    return (
      <div className='App'>
      </div>
    );
  }
}
