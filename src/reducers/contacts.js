import { FETCH_CONTACTS, SEARCH_CONTACTS_BY_NAME } from '../actions'

const initialState = {
  contacts: []
}

export default function update (state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
    case SEARCH_CONTACTS_BY_NAME:
      return { ...state, contacts: action.contacts }
    default:
      return state
  }
}
