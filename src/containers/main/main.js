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
    const { contacts } = this.props

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
              onSelect={this.onSelect} />
          </div>

          <div className={style.contentPanel}>
            {this.props.children}
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
  fetchContacts: React.PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts.contacts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ fetchContacts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
