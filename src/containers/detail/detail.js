import React from 'react'
import { connect } from 'react-redux'
import { ContactDetail } from '../../components'

class Detail extends React.Component {
  render () {
    return this.props.contact == null ? <div>Loading...</div> : <ContactDetail contact={this.props.contact} />
  }
}

Detail.propTypes = {
  params: React.PropTypes.object.isRequired,
  contact: React.PropTypes.object
}

const mapStateToProps = (state, ownProps) => {
  const contact = state.contacts.contacts.filter((contact) => {
    return parseInt(contact.id) === parseInt(ownProps.params.id)
  })
  if (contact.length === 1) {
    return { contact: contact[0] }
  }
  return state
}

export default connect(mapStateToProps)(Detail)
