import { FETCH_CONTACTS } from '../actions'

const initialState = {
  contacts: []
}

export default function update (state = initialState, action) {
  if (action.type === FETCH_CONTACTS) {
    return { contacts: action.contacts }
  }
  return state
}
