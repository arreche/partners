import { FETCH_CONTACTS } from '../actions'

const initialState = {
  contacts: []
}

export default function update (state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      return { ...state, contacts: action.contacts }
    default:
      return state
  }
}
