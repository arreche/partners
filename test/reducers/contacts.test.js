import { FETCH_CONTACTS_SUCCESS } from '../../src/actions'
import reducer from '../../src/reducers/contacts'
import expect from 'expect'

describe('Contacts reducer', () => {
  it('should return the initial state when there is not state', () => {
    const expected = {contacts: []}
    const state = reducer(undefined, { type: '' })

    expect(state).toEqual(expected)
  })

  it('should return state with contacts after fetching contacts', () => {
    const contacts = [
      {id: 1, name: 'contact1'},
      {id: 2, name: 'contact2'}
    ]

    const state = reducer({contacts: []}, {type: FETCH_CONTACTS_SUCCESS, contacts})
    expect(contacts).toEqual(state.contacts)
  })
})
