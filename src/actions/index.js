import mockContacts from '../stores/mockContacts'

export const FETCH_CONTACTS = 'FETCH_CONTACTS'
export function fetchContacts () {
  return {
    type: FETCH_CONTACTS,
    contacts: mockContacts // TODO: Fetch async from API
  }
}
