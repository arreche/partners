import contacts from './mockContacts.js'

const contactsStore = {

  loadContact: function (id) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(contacts.find(contact => contact.id === id)), 600)
    })
  },

  loadContacts: function () {
    return new Promise((resolve) => {
      setTimeout(() => resolve(contacts), 600)
    })
  },

  searchByName: function (name) {
    return contacts.filter((contact) => { return contact.name.first.indexOf(name) >= 0 })
  }

}

export default contactsStore
