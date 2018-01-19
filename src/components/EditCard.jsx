import React, { Component } from 'react'
import Draggable from 'react-draggable'
import AddMessage from './AddMessage'
import AddImage from './AddImage'
import PreviewMessage from './PreviewMessage'
import PreviewImage from './PreviewImage'
import button from '../../styles/common/button.css';
import styles from '../../styles/editCard.css'
import * as imageCard from '../../styles/previewImage.css'

import { connect } from 'react-redux'
import types from '../store/types'
import updateState from '../store/action'

class EditCard extends Component {
  componentWillMount() {
    this.setState({
      currentMessage: '',
      position: { x: 0, y: 219 },
      showPreview: true,
      inputWhat: 'text',
      visibility: 'visible',
    });
  }

  handleButtonClick = () => {
    const message = { currentMessage: this.state.currentMessage, position: this.state.position }
    this.props.updateState({
      personalMessages: [ ...this.props.personalMessages, message ]
    }, types.ADDMESSAGE)
    this.setState({
      currentMessage: '',
      showPreview: false,
    })
    document.getElementById('friendMessage').value = ''
  }

  recordPosition = (e) => {
    const { x, y } = e.toElement.getBoundingClientRect()

    this.setState({ position: { x, y } });
  }

  updateCurrentMessage = (msg) => {
    this.setState({ currentMessage: msg, showPreview: true });
  }

  finalizeImages = (image) => {
    this.props.updateState({ imageMessages: [ ...this.props.imageMessages, image ] }, types.ADDIMAGE)
  }

  toggleInput = () => {
    const what = (this.state.inputWhat === 'text')? 'image' : 'text'
    this.setState({ inputWhat: what  })
  }

  doneInput = () => {
    this.setState({ inputWhat: 'done', visibility: 'hidden' })
  }

  renderInputOptions = () => {
    switch (this.state.inputWhat) {
      case 'text':
        return <AddMessage finalizeState={this.handleButtonClick} updateMessage={this.updateCurrentMessage} />
      case 'image':
        return <AddImage updateImage={this.updateImage} finalizeImages={this.finalizeImages} />
      default:
        return null
    }
  }

  renderEditArea = () => {
    if (this.state.inputWhat === 'done') return null
    return(
      <div className={styles.center}>
        <button className={button['fancy-button']} onClick={this.toggleInput}>Toggle</button>
        <button className={button['fancy-button']} onClick={this.doneInput}>Done</button>
      </div>
    )
  }

  renderPreview = () => {
    return (this.state.showPreview) ? <PreviewMessage recordPosition={this.recordPosition} currentMessage={this.state.currentMessage} /> : null
  }

  whichBackground = () => {
    const bkg = this.props.background
    switch (bkg) {
      case 'bgk1':
        return styles.headbgk1
      case 'bgk2':
        return styles.headbgk2
      case 'bgk3':
        return styles.headbgk3
      case 'bgk4':
        return styles.headbgk4
      case 'bgk5':
        return styles.headbgk5
      case 'bgk6':
        return styles.headbgk6
      default:
        return styles.headbgk7
    }
  }

  slugIT = () => {
    const { mainMessage, name } = this.props
    let message = mainMessage.split(' ').join('-')
    let theName = name.split(' ').join('-')
    return `${message}-${theName}`
  }

  renderLinks = () => {
    if (this.state.inputWhat === 'done') return null
    return (
      <div className={styles.links}>
        <div className={styles.linkText}>Pass this card around to others:<span className={styles.linksBlue}>bit.ly/Klu/f138 </span></div>
        <div className={styles.linkText}>Send the final card:<span className={styles.linksBlue} >xoxo.{this.slugIT()}/ </span></div>
      </div>
    )
  }

  render() {
    const { personalMessages, imageMessages } = this.props;
    const bkgHeading = this.whichBackground()
    return(
      <div className={styles.cupcake}>
      {this.renderLinks()}

        <div className={[styles.birthdayHeading, bkgHeading].join(' ')}>
          <div className={styles.birthdayTextBox}>
            <h1>{this.props.mainMessage}</h1>
            <h1>{this.props.name}!</h1>
            <p>xoxo, your friends and family at XO Group</p>
          </div>
        </div>

        {this.renderEditArea()}
        {this.renderInputOptions()}

        {personalMessages && personalMessages.map(message => (
          <div className={styles.positioned} key={Math.round(Math.random() * 100000)}>
            <Draggable
              defaultPosition={{x: 0, y: 0}}
              position={message.position}
              disabled={true}
            >
              <div className={styles.messagesRendered}>{message.currentMessage}</div>
            </Draggable>
          </div>
        ))}
        {imageMessages.map(img => (
          <div className={styles.positioned} key={Math.round(Math.random() * 100000)}>
          <Draggable
            defaultPosition={{x: 0, y: 0}}
            position={img.position}
            disabled={true}
            >
            <div className={imageCard.imageCard}>
              <div className={imageCard.cardContent}>
                <img className={styles.imageMessages} src={img.src} />
                <div className={styles.imageMessage}>{img.message}</div>
              </div>
            </div>
          </Draggable>
          </div>
        ))}
        {this.renderPreview()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { updateState })(EditCard)
