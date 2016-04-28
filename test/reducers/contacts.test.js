import { FETCH_CONTACTS } from '../../src/actions'
import reducer from '../../src/reducers/contacts'
import mockContacts from '../../src/stores/mockContacts'
import expect from 'expect'

describe('Contacts reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      contacts: []
    })
  })
  it('fetches contacts', () => {
    expect(
      reducer({ contacts: mockContacts }, FETCH_CONTACTS)
    ).toEqual({
      contacts: mockContacts
    })
  })
})
