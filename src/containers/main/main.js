import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ContactsContainer } from '../../containers'
import { Toolbar } from '../../components'
import style from './style.css'

class Main extends Component {

  render () {
    const { children } = this.props

    return (
      <div className={style.main}>
        <div className={style.toolbar}>
          <Toolbar onSearch={this.onSearch}
            onEdit={this.onEdit}
            onNew={this.onNew} />
        </div>

        <div className={style.mainPanel}>
          <div className={style.navPanel}>
            <ContactsContainer />
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

  onNew () {

  }

}

Main.propTypes = {
  children: React.PropTypes.object.isRequired
}

export default connect(
  state => ({ contacts: state.contacts.contacts })
)(Main)
