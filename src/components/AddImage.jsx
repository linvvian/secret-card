import React, { Component } from 'react';
import PreviewImage from './PreviewImage'
import { Field, FieldGroup } from '@xo-union/tk-component-fields';
import styles from '../../styles/addImage.css'

export default class AddImage extends Component {
  state = {
    showPreview: false,
    src: '',
  }

  addImage = (e) => {
    let src = window.document.getElementById('src').value
    this.setState({
      src: src,
      showPreview: true,
    })
  }

  saveImageMessage = (imgObj) => {
    console.log("in add image saving image message", imgObj)
    this.props.finalizeImages(imgObj)
  }

  render () {
    const { src } = this.state
    return (
      <div className={styles.imageWrapper}>
        <div className={styles.optionsWrapper}>
          <FieldGroup>
            <input id='src' type='text' />
            <button onClick={this.addImage}>Enter</button>
          </FieldGroup>
        </div>
        { this.state.showPreview && <PreviewImage saveImageMessage={this.saveImageMessage} src={src} /> }
      </div>
    );
  }
}
