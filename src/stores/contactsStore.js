import contacts from './mockContacts.js'

const contactsStore = {

  loadContact: function (id) {
    return Promise.resolve(contacts.find((contact) => contact.id === id))
  },

  loadContacts: function () {
    return Promise.resolve(contacts)
  },

  searchByName: function (name) {
    return contacts.filter((contact) => { return contact.name.first.indexOf(name) >= 0 })
  }

}

export default contactsStore
