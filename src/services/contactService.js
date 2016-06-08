import contacts from './mockContacts.js'

const contactService = {

  loadContact: function (id) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(contacts.find(contact => contact.id === id)), 600)
    })
  },

  loadContacts: function () {
    return new Promise((resolve) => {
      setTimeout(() => resolve(contacts), 600)
    })
  }

}

export default contactService
