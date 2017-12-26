import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import button from '../../styles/common/button.css';
import styles from '../../styles/who.css';
import { Field, Dropdown, FieldGroup, FormTheme, DropdownItem } from '@xo-union/tk-component-fields';
export default class WhatForm extends Component {

  handleButtonClick = () => {
    this.props.updateState({
      mainMessage: document.getElementById('celebration').value
    })
  }

  render () {
    return (
      <div className={styles.appWrapper}>
        <div className={styles.question}>What are we celebrating:</div>
        <FormTheme>
          <FieldGroup>
            <Dropdown id="celebration" name="Occassion">
              <DropdownItem label="Birthday" />
              <DropdownItem label="Congrats" />
              <DropdownItem label="Get Well" />
              <DropdownItem label="I'm sorry your dog died" />
            </Dropdown>
            </FieldGroup>
        </FormTheme>
        <div>
          <Link to="/backgrounds">
            <button className={button['fancy-button']} onClick={this.handleButtonClick}>Next ></button>
          </Link>
        </div>
      </div>
    );
  }
}