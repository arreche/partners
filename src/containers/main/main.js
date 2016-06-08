import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchByName } from '../../actions'
import { ContactsContainer } from '../../containers'
import { Toolbar } from '../../components'
import style from './style.css'
import { bindActionCreators } from 'redux'

class Main extends Component {

  render () {
    console.log(this.props)
    const { children, searchByName } = this.props

    return (
      <div className={style.main}>
        <div className={style.toolbar}>
          <Toolbar onSearch={searchByName}
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

  onEdit () {

  }

  onNew () {

  }

}

Main.propTypes = {
  children: React.PropTypes.object,
  searchByName: React.PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({ searchByName }, dispatch)
}

export default connect(null, mapDispatchToProps)(Main)