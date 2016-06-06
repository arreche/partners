import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import { bindActionCreators } from 'redux'
import { updateContact } from '../../actions'

const fields = ['firstName', 'phone', 'email']

const validate = values => {
    const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

class ContactForm extends Component {
  render() {
    const {fields: {firstName, phone, email}, resetForm, updateContact, submitting} = this.props;
    return (
      <form onSubmit={updateContact}>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" {...firstName}/>
          {firstName.touched && firstName.error && <div>{firstName.error}</div>}
        </div>
        <div>
          <label>Phone</label>
          <input type="text" placeholder="Phone" {...phone}/>
          {phone.touched && phone.error && <div>{phone.error}</div>}
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" {...email}/>
          {email.touched && email.error && <div>{email.error}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
  const contacts = state.contacts.contacts.filter((contact) => {
    return parseInt(contact.id) === parseInt(ownProps.params.id)
  })

  return {initialValues: contacts[0]}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ updateContact }, dispatch)
}

ContactForm = reduxForm({
  form: 'contact',
  fields,
  validate,
}, mapStateToProps, mapDispatchToProps)(ContactForm);

export default ContactForm;
