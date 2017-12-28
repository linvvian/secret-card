import React, { Component } from 'react'
import Draggable from 'react-draggable'
import { Textarea } from '@xo-union/tk-component-fields';
import styles from '../../styles/previewImage.css'
import button from '../../styles/common/button.css';

class PreviewImage extends Component {
  state = {
    defaultPosition: { x: -350, y: -500 },
    isDone: false,
    isDisabled: false,
    position: {},
    message: '',
  }

  recordPosition = (e) => {
    const x = e.clientX,
          y = e.clientY
    this.setState({ position: { x, y } });
  }

  saveImage = () => {
    const message = window.document.getElementById('image_message').value
    this.setState({ isDone: true, message: message })
    const image = { position: this.state.position, message: message, src: this.props.src }
    this.props.saveImageMessage(image)
  }

  renderWhat = () => {
    return (this.state.isDone) ? <div className={styles.imageMessage}>{this.state.message}</div> : <span><Textarea id='image_message' name='your message' />
    <div><button className={button['fancy-button']} onClick={this.saveImage}>Save</button></div></span>
  }

  render() {
    return(
      <Draggable
        defaultPosition={this.state.defaultPosition}
        onDrag={this.recordOnDrag}
        onStop={this.recordPosition}
        disabled={this.state.isDone}
        cancel='span'
        >
          <div className={styles.imageCard}>
            <div className={styles.cardContent}>
              <img src={this.props.src } />
              {this.renderWhat()}
            </div>
          </div>
      </Draggable>
    )
  }
}

export default PreviewImage
