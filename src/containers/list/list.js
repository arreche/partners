import React from 'react'
import { Contact } from 'components'
import style from './style.css'

const List = (props) => {
  const contacts = props.contacts.map((contact, i) => {
    return (
      <div className={style.row} key={i}>
        <Contact title={contact.name.first}
          image={contact.picture.thumbnail}
          onSelect={onSelect(contact.id, props.onSelect)} />
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
      {contacts}
    </div>
  )
}

List.propTypes = {
  contacts: React.PropTypes.array.isRequired,
  onSelect: React.PropTypes.func.isRequired
}

export default List
