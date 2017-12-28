import React, { Component } from 'react'
import Draggable from 'react-draggable'
import styles from '../../styles/editCard.css'

class PreviewMessage extends Component {
  state = {
    defaultPosition: { x: 0, y: -600 }
  }

  render() {
    const { recordPosition, currentMessage } = this.props
    return(
      <div>
        <Draggable
          defaultPosition={this.state.defaultPosition}
          onDrag={recordPosition}
          >
            <div className={styles.messagesRendered}>{currentMessage}</div>
          </Draggable>
        </div>
      )
  }
}

export default PreviewMessage
