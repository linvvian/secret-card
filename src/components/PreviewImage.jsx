import React, { Component } from 'react'
import Draggable from 'react-draggable'
import styles from '../../styles/previewImage.css'

class PreviewImage extends Component {
  state = {
    defaultPosition: { x: 0, y: 0 },
    isDone: false,
    isDisabled: false,
    position: {},
    message: '',
  }

  recordPosition = (e) => {
    const { x, y } = e
    this.setState({ position: { x, y }})
  }

  saveImage = () => {
    const message = window.document.getElementById('image_message').value
    this.setState({ isDone: true, message: message })
    const image = { position: this.state.position, message: message, src: this.props.src }
    console.log("preview image save button hit", image)
    this.props.saveImageMessage(image)
  }

  renderWhat = () => {
    return (this.state.isDone) ? <div>{this.state.message}</div> : <span><input id='image_message' placeholder='your message' />
    <div><button onClick={this.saveImage}>Save</button></div></span>
  }

  recordOnDrag = (e) => {
    console.log("on drag", e)
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
