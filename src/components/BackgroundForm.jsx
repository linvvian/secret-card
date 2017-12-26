import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from '../../styles/background.css';
import button from '../../styles/common/button.css';
import who from '../../styles/who.css';


export default class BackgroundForm extends Component {

  constructor(props) {
    super(props);

    this.selectedClassName = styles['selected'];
    this.selectedClass = `.${this.selectedClassName}`;
  }

  selectAsBackground = (e) => {
    let selected = document.querySelectorAll(this.selectedClass);
    const className = this.selectedClassName;

    [].forEach.call(selected, function(el) {
      el.classList.remove(className);
    });

    e.target.classList.add(this.selectedClassName)

    console.log(e.target);
  }

  setAsBackground = () => {
    const selectedBackgroundDiv = document.querySelector(this.selectedClass);
    let bgName = 'default'

    if(selectedBackgroundDiv) {
      bgName = selectedBackgroundDiv.getAttribute('data-bg');
    }

    this.props.updateState({background: bgName });
  }

  render () {
    return (
      <div className={styles.wrapper}>
        <div className={who.question}>Pick a theme:</div>
        <div className={styles['backgroundWrapper']}>
          <div data-bg="bgk1" onClick={this.selectAsBackground} className={styles['bgk1']}>Glitter</div>
          <div data-bg="bgk2" onClick={this.selectAsBackground} className={styles['bgk2']}>Cats</div>
          <div data-bg="bgk3" onClick={this.selectAsBackground} className={styles['bgk3']}>White</div>
          <div data-bg="bgk4" onClick={this.selectAsBackground} className={styles['bgk4']}>Blue</div>
          <div data-bg="bgk5" onClick={this.selectAsBackground} className={styles['bgk5']}>Dogs</div>
          <div data-bg="bgk6" onClick={this.selectAsBackground} className={styles['bgk6']}>Get Well</div>
        </div>
        <Link onClick={this.setAsBackground} to='/editCard'><button className={button['fancy-button']} >Create</button></Link>
      </div>
    );
  }
}
