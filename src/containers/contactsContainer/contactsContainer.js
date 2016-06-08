import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import { Contacts } from '../../components'
import { fetchContacts, selectContact } from '../../actions'

class ContactsContainer extends Component {

  constructor (props) {
    super(props)
    this.onClickContact = this.onClickContact.bind(this)
  }

  componentDidMount () {
    this.props.fetchContacts()
  }

  onClickContact (contact) {
    hashHistory.push('contacts/' + contact.id)
  }

  render () {
    return <Contacts contacts={this.props.contacts} onClickContact={this.onClickContact} />
  }
}

ContactsContainer.propTypes = {
  fetchContacts: React.PropTypes.func.isRequired,
  onClickContact: React.PropTypes.func,
  contacts: React.PropTypes.array
}

export default connect(
  state => ({ contacts: state.contacts.contacts }),
  dispatch => bindActionCreators({ fetchContacts, selectContact }, dispatch)
)(ContactsContainer)
