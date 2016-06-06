import mockContacts from '../stores/mockContacts'
import contactsStore from '../stores/contactsStore'

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
    contacts: contactsStore.searchByName(name) // TODO: Filter async from API
  };
}

export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export function updateContact(contact) {
  return {
    type: UPDATE_CONTACT,
    contacts: contactsStore.updateContact(contact) // TODO: Update async from API
  };
}
