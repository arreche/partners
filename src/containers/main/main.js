import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchContacts } from '../../actions'
import { List } from '../../containers'
import { Toolbar } from '../../components'
import style from './style.css'

class Main extends Component {

  componentDidMount () {
    this.props.fetchContacts()
  }

  render () {
    const { children, contacts, contactsComponent } = this.props

    return (
      <div className={style.main}>
        <div className={style.toolbar}>
          <Toolbar onSearch={this.onSearch}
            onEdit={this.onEdit}
            onNew={this.onNew} />
        </div>

        <div className={style.mainPanel}>
          <div className={style.navPanel}>
            <List contacts={contacts}
              onSelect={this.onSelect}
              conf={contactsComponent} />
          </div>

          <div className={style.contentPanel}>
            {children}
          </div>
        </div>

      </div>
    )
  }

  onSearch () {

  }

  onEdit () {

  }

  onSelect (id) {
    hashHistory.push('/contacts/' + id)
  }

  onNew () {

  }

}

Main.propTypes = {
  contacts: React.PropTypes.array.isRequired,
  children: React.PropTypes.object.isRequired,
  contactsComponent: React.PropTypes.object,
  fetchContacts: React.PropTypes.func.isRequired
}

export default connect(
  state => ({ contacts: state.contacts.contacts, contactsComponent: state.contactsComponent }),
  dispatch => bindActionCreators({ fetchContacts }, dispatch)
)(Main)
