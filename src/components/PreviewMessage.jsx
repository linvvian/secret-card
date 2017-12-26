import React, { Component } from 'react'
import Draggable from 'react-draggable'

class PreviewMessage extends Component {
  state = {
    defaultPosition: { x: 0, y: 0 }
  }

  componentWillUnMount = () => {
    this.setState({ defaultPosition: { x: 0, y: 0 } })
  }

  render() {
    const { recordPosition, currentMessage } = this.props
    return(
      <div>
        <Draggable
          defaultPosition={this.state.defaultPosition}
          onDrag={recordPosition}
          >
            <div className="currentMessage">{currentMessage}</div>
          </Draggable>
        </div>
      )
  }
}

export default PreviewMessage
