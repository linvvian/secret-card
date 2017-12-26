import React, { Component } from 'react';
import Icon from '@xo-union/tk-component-icons';
import styles from '../../styles/FromAllOfUs.css';

export default class FromAllOfUs extends Component {
  render () {
    return (
      <div className={styles.center}>
        <div className={styles.heading}>From all of us</div>
        <Icon className={styles.heart} name="heart-filled" />
        <div className={styles.heading}>xoxo</div>
      </div>
    );
  }
}
