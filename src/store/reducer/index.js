import { combineReducers } from 'redux'
import types from '../types'

const nameReducer = (state='no name', action) => {
  switch (action.type) {
    case types.SETNAME:
      return action.payload.name
    default:
      return state
  }
}

const mainMessageReducer = (state='what?', action) => {
  switch (action.type) {
    case types.SETMAINMESSAGE:
      return action.payload.mainMessage
    default:
      return state
  }
}

const backgroundReducer = (state='bgk7', action) => {
  switch (action.type) {
    case types.SETBACKGROUND:
      console.log('set background', action.payload.background)
      return action.payload.background
    default:
      return state
  }
}

const messagesReducer = (state=[], action) => {
  switch (action.type) {
    case types.ADDMESSAGE:
      return [...state, action.payload]
    default:
      return state
  }
}

const imagesReducer = (state=[], action) => {
  switch (action.type) {
    case types.ADDIMAGE:
      return [...state, action.payload]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  name: nameReducer,
  mainMessage: mainMessageReducer,
  personalMessages: messagesReducer,
  imageMessages: imagesReducer,
  background: backgroundReducer
})

export default rootReducer
