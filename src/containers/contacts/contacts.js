import React from 'react';
import Contact from '../../components/contact/contact';
import style from './style.css';

const Contacts = (props) => {
    const contacts = props.contacts.map((contact, i) => {
        return (
            <Contact title={contact.name.first}
                     image={contact.picture.thumbnail}
                     onSelect={onSelect(contact.id, props.onSelect)}
                     key={i} />
        )
    })

    function onSelect(id, cb) {
        return (event) => {
            return cb && cb(id);
        }
    }

    return (
        <div className={style.contacts}>
            {contacts}
        </div>
    )
}

Contacts.propTypes = {
    contacts: React.PropTypes.array.isRequired
}

export default Contacts;
