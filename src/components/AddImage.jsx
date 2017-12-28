import React, { Component } from 'react';
import PreviewImage from './PreviewImage'
import { Field, FormTheme, FieldGroup } from '@xo-union/tk-component-fields';
import styles from '../../styles/addImage.css'
import button from '../../styles/common/button.css';

export default class AddImage extends Component {
  state = {
    showPreview: false,
    src: '',
  }

  addImage = (e) => {
    let src = window.document.getElementById('src').value
    window.document.getElementById('src').value = ''
    this.setState({
      src: src,
      showPreview: true,
    })
  }

  saveImageMessage = (imgObj) => {
    this.setState({ showPreview: false })
    this.props.finalizeImages(imgObj)
  }

  render () {
    const { src } = this.state
    return (
      <div className={styles.imageWrapper}>
        <div className={styles.optionsWrapper}>
            <div>
              <FormTheme name='white'>
                <FieldGroup>
                 <Field id='src' name='GIF link' />
                 </FieldGroup>
              </FormTheme>
            </div>
            <div className={styles.center}>
              <button className={button['fancy-button']} onClick={this.addImage}>Enter</button>
            </div>
        </div>
        { this.state.showPreview && <PreviewImage saveImageMessage={this.saveImageMessage} src={src} /> }
      </div>
    );
  }
}
