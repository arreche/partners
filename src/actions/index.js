import mockContacts from '../stores/mockContacts'

export const FETCH_CONTACTS = 'FETCH_CONTACTS'
export function fetchContacts () {
  return {
    type: FETCH_CONTACTS,
    contacts: mockContacts // TODO: Fetch async from API
  }
}

export const SEARCH_CONTACTS_BY_NAME = 'SEARCH_CONTACTS_BY_NAME';
export function searchByName(name) {
  return {
    type: SEARCH_CONTACTS_BY_NAME,
    name
  };
}