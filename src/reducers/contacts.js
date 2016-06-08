import { FETCH_CONTACTS_SUCCESS, SEARCH_CONTACTS_BY_NAME } from '../actions'

const initialState = {
  contacts: []
}

export default function update (state = initialState, action) {
  switch (action.type) {
    case SEARCH_CONTACTS_BY_NAME:
    case FETCH_CONTACTS_SUCCESS:
      return { ...state, contacts: action.contacts }
    default:
      return state
  }
}
