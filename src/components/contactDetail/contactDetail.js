import React from 'react';

import style from './style.css'

const ContactProfile = (props) => {
    return (
        <div className={style.contactDetail}>
            <div className={style.photo}>
                <img src={props.contact.picture.medium} />
            </div>
            <div className={style.detail}>
                <div className={style.name}>{ props.contact.name.first }</div>
                <div className={style.contactInfo}>
                    <div>{ props.contact.phone }</div>
                    <div>{ props.contact.email }</div>
                </div>
            </div>
        </div>
    )
}

export default ContactProfile;
