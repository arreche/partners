import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchContacts, searchByName } from '../../actions'
import { List } from '../../containers'
import { Toolbar } from '../../components'
import style from './style.css'

class Main extends Component {

  componentDidMount () {
    this.props.fetchContacts()
  }

  render () {
    const { contacts, searchByName } = this.props

    return (
      <div className={style.main}>
        <div className={style.toolbar}>
          <Toolbar onSearch={searchByName}
            onEdit={this.onEdit}
            onNew={this.onNew} />
        </div>

        <div className={style.mainPanel}>
          <div className={style.navPanel}>
            <List contacts={contacts}
              onSelect={this.onSelect} />
          </div>

          <div className={style.contentPanel}>
            {this.props.children}
          </div>
        </div>

      </div>
    )
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
  fetchContacts: React.PropTypes.func.isRequired,
  searchByName: React.PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts.contacts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ fetchContacts, searchByName }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
