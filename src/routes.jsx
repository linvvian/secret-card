import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import WhoForm from './components/WhoForm';
import WhatForm from './components/WhatForm';
import BackgroundForm from './components/BackgroundForm';
import EditCard from './components/EditCard';
import styles from '../styles/who.css';
import FromAllOfUs from './components/FromAllOfUs';
import FinalCard from './components/FinalCard';

class Routes extends Component {
  state = {
    name: 'Stephanie',
    mainMessage: 'Happy Birthday',
    personalMessages: [],
    imageMessages: [],
    background: ''
  }

  updateState = (stateToUpdate) => {
    this.setState(stateToUpdate)
    console.log("in routes", stateToUpdate, this.state)
  }

  render () {
    return (
    <Router>
      <div>
        <Route exact path="/who" render={routeProps =>
          <WhoForm {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
        <Route exact path="/what" render={routeProps =>
          <WhatForm {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
        <Route exact path="/backgrounds" render={routeProps =>
          <BackgroundForm {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
        <Route exact path="/editCard" render={routeProps =>
          <EditCard {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
        <Route exact path="/happy-birthday-stephanie" render={routeProps =>
          <FinalCard {...this.state} {...routeProps} updateState={this.updateState} />
        }/>
        <Route exact path="/" render={() => <Redirect from="/" to="/who"/> } />
      </div>
    </Router>
    );
  }
}

export default Routes;
