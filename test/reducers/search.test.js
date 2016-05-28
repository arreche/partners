import { SEARCH_CONTACTS_BY_NAME } from '../../src/actions'
import reducer from '../../src/reducers/contacts'
import expect from 'expect'
import mockContacts from '../../src/stores/mockContacts'

describe('Search reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({contacts:[]})
  })
  it('should return a state with the result of a search', () => {
    expect(
      reducer({contacts:mockContacts}, { type: SEARCH_CONTACTS_BY_NAME, contacts: {
        'id': 2,
        'name': {
          'first': 'barbara'
        },
        'picture': {
          'large': 'http://api.randomuser.me/portraits/women/74.jpg',
          'medium': 'http://api.randomuser.me/portraits/med/women/74.jpg',
          'thumbnail': 'http://api.randomuser.me/portraits/thumb/women/74.jpg'
        },
        phone: '123-456-789',
        email: 'barbara@mail.com'
      } })
    ).toEqual({contacts:{
      'id': 2,
      'name': {
        'first': 'barbara'
      },
      'picture': {
        'large': 'http://api.randomuser.me/portraits/women/74.jpg',
        'medium': 'http://api.randomuser.me/portraits/med/women/74.jpg',
        'thumbnail': 'http://api.randomuser.me/portraits/thumb/women/74.jpg'
      },
      phone: '123-456-789',
      email: 'barbara@mail.com'
    }})
  })
})
