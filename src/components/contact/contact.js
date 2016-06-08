import React from 'react'
import style from './style.css'

const Contact = (props) => {
  const { contact } = props

  return (
    <div className={style.contact}>
      <div className={style.title}>{contact.name.first}</div>
      <div className={style.thumb}><img src={contact.picture.thumbnail} /></div>
    </div>
  )
}

Contact.propTypes = {
  contact: React.PropTypes.object
}

export default Contact
