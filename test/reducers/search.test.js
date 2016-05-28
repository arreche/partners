import { SEARCH_CONTACTS_BY_NAME } from '../../src/actions'
import reducer from '../../src/reducers/contacts'
import expect from 'expect'
import mockContacts from '../../src/stores/mockContacts'
import contactsStore from '../../src/stores/contactsStore'

describe('Search reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({contacts:[]})
  })
  it('should return a state with the result of a search', () => {
    let searchedContact = contactsStore.searchByName('barbara')

    expect(
      reducer({ contacts:mockContacts }, { type: SEARCH_CONTACTS_BY_NAME, contacts:[ searchedContact ] })
    ).toEqual({ contacts: [ searchedContact ] } )
  })
})
