import contactsStore from '../stores/contactsStore'

export const FETCH_CONTACTS = 'FETCH_CONTACTS'
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR'
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS'

export function fetchContacts () {
  return (dispatch) => {
    dispatch({ type: FETCH_CONTACTS })

    return contactsStore.loadContacts()
      .then((contacts) => {
        return dispatch({ type: FETCH_CONTACTS_SUCCESS, contacts: contacts })
      })
      .catch((error) => {
        return dispatch({ type: FETCH_CONTACTS_ERROR, error: error })
      })
  }
}

export const SEARCH_CONTACTS_BY_NAME = 'SEARCH_CONTACTS_BY_NAME';
export function searchByName(name) {
  return {
    type: SEARCH_CONTACTS_BY_NAME,
    contacts: contactsStore.searchByName(name) // TODO: Filter async from API
  };
}
