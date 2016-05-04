import { connect } from 'react-redux'
import { searchByName } from '../../actions'
import Main  from '../'

const search = (contacts, name) => {
  return contacts.filter( (contact) => {
    return contact.name.first.indexOf(name) >= 0
  })
}

const mapStateToProps = (state) => {
  return {
    contacts: search(state.contacts, state.name)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (name) => {
      dispatch(search(name))
    }
  }
}

//const Search = connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(Main)
//
//export default Search
