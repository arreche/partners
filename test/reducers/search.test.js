import { SEARCH_CONTACTS } from '../../src/actions'
import reducer from '../../src/reducers/search'
import expect from 'expect'

describe('Search reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, { type: SEARCH_CONTACTS })
    ).toEqual('')
  })
  it('should change state', () => {
    expect(
      reducer('', { type: SEARCH_CONTACTS, name: 'Ana' })
    ).toEqual('Ana')
  })
})
