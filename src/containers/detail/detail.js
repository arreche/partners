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

export default connect(
  (state, ownProps) => ({ contact: state.contacts.contacts.find((c) => c.id === parseInt(ownProps.params.id)) })
)(Detail)
