import React from 'react'
import Contact from '../../components/contact/contact'
import style from './style.css'

const List = (props) => {
  const { contacts, conf } = props

  const contactComponents = contacts.map((contact, i) => {
    return (
      <div className={style.row} key={i}>
        <Contact title={contact.name.first}
          image={contact.picture.thumbnail}
          onSelect={onSelect(contact.id, props.onSelect)}>
        </Contact>
      </div>
    )
  })

  function onSelect (id, cb) {
    return () => {
      return cb && cb(id)
    }
  }

  return (
    <div className={style.contacts}>
      {conf.loading ? <div>Loading...</div> : contactComponents}
    </div>
  )
}

List.propTypes = {
  contacts: React.PropTypes.array.isRequired,
  loading: React.PropTypes.bool,
  onSelect: React.PropTypes.func.isRequired
}

export default List
