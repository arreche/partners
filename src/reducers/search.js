import { SEARCH_CONTACTS_BY_NAME } from '../actions'

export default function search(state = '', action) {
  switch (action.type) {
    case SEARCH_CONTACTS_BY_NAME:
      return action.name
    default:
      return state
  }
}
