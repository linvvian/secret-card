import React, { Component } from 'react';
import Navigation from './components/Navigation';
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
        <Navigation/>
        <div>
          <h1>{this.props.name}</h1>
          <p>{this.props.mainMessage}</p>
        </div>
      </div>
    );
  }
}
