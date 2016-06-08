import {
    FETCH_CONTACTS,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_ERROR
} from '../actions'

export default function contactsComponent (state = { loading : false }, action) {
  const { loading, ...rest } = state

  switch (action.type) {
    case FETCH_CONTACTS:
      return { ...state, loading: true }

    case FETCH_CONTACTS_SUCCESS:
    case FETCH_CONTACTS_ERROR:
      return { ...state, loading: false }

    default:
      return state
  }
}
