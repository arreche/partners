import contactService from '../services/contactService'

export const FETCH_CONTACTS = 'FETCH_CONTACTS'
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR'
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS'


export function fetchContacts () {
  return (dispatch) => {
    dispatch({ type: FETCH_CONTACTS })

    return contactService.loadContacts()
      .then((contacts) => {
        return dispatch({ type: FETCH_CONTACTS_SUCCESS, contacts: contacts })
      })
      .catch((error) => {
        return dispatch({ type: FETCH_CONTACTS_ERROR, error: error })
      })
  }
}
