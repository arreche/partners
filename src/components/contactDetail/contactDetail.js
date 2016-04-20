import React from 'react'
import style from './style.css'

const ContactProfile = (props) => {
  const { contact } = props
  return (
    <div className={style.contactDetail}>
      <div className={style.photo}>
        <img src={contact.picture.medium} />
      </div>
      <div className={style.detail}>
        <div className={style.name}>{contact.name.first}</div>
        <div className={style.contactInfo}>
          <div>{contact.phone}</div>
          <div>{contact.email}</div>
        </div>
      </div>
    </div>
  )
}

ContactProfile.propTypes = {
  contact: React.PropTypes.object.isRequired
}

export default ContactProfile
