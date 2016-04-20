import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import Main from '../src/containers/main/main'
import Toolbar from '../src/components/toolbar/toolbar'
import Contacts from '../src/containers/contacts/contacts'

describe('Main Component', () => {
  it('Contains Toolbar Component', () => {
    const vdom = shallow(<Main />)
    expect(vdom.find(Toolbar).length).toBe(1)
  })

  it('Containts Contacts Container', () => {
    const vdom = shallow(<Main />)
    expect(vdom.find(Contacts).length).toBe(1)
  })
})
