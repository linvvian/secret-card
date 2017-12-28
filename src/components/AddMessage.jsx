import React, { Component } from 'react';
import styles from '../../styles/addMessage.css';
import { Textarea, FieldGroup } from '@xo-union/tk-component-fields';
import button from '../../styles/common/button.css';

export default class AddMessage extends Component {
  state = {
    showDoneBtn: false,
  }

  createMessage = () => {
    let msg = document.getElementById('friendMessage').value;
    this.setState({ showDoneBtn: true })
    this.props.updateMessage(msg);
  }

  render () {
    return (
      <div className={styles.center}>
        <FieldGroup>
          <Textarea label={false} name="friendMessage" id="friendMessage" placeholder="Your message here" />
        </FieldGroup>
        <div className={styles.centerAgain}>
          <button className={button['fancy-button']} onClick={this.createMessage}>Preview</button>
          { this.state.showDoneBtn
            && <button className={button['fancy-button']} onClick={this.props.finalizeState}>Done</button> }
        </div>
      </div>
    );
  }
}
