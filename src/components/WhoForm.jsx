import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FromAllOfUs from './FromAllOfUs';
import { Field, FormTheme, FieldGroup } from '@xo-union/tk-component-fields';
import button from '../../styles/common/button.css';
import styles from '../../styles/who.css';

export default class WhoForm extends Component {

  handleButtonClick = () => {
    this.props.updateState({
      name: window.document.getElementById('who').value
    });
  }

  render () {
    return (
      <div className={styles.appWrapper}>
        <div className={styles.question}>Who are you making this for?</div>
        <FormTheme>
           <Field id="who" name="who" />
        </FormTheme>
        <div>
          <Link to="/what">
            <button className={button['fancy-button']} onClick={this.handleButtonClick}>Next ></button>
          </Link>
        </div>
      </div>
    );
  }
}
