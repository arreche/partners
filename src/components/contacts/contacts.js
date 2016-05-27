import React from 'react'
import { Contact } from '../'

const Contacts = (props) => {
  const { contacts, onClickContact } = props

  const onClick = (contact) => {
    return () => onClickContact(contact)
  }

  const contactComponents = contacts.map((contact) => (
    <div onClick={onClick(contact)}>
      <Contact contact={contact} key={contact.id} />
    </div>
  ))

  return <div>{contactComponents}</div>
}

Contacts.propTypes = {
  contacts: React.PropTypes.array.isRequired,
  onClickContact: React.PropTypes.func
}

export default Contacts
