import { FETCH_CONTACTS_SUCCESS } from '../actions'

const initialState = {
  contacts: []
}

export default function update (state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS:
      return { ...state, contacts: action.contacts }
    default:
      return state
  }
}
