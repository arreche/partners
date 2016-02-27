import React from 'react';
import style from './style.css'

const Contact = (props) => {
    const { title, image, onSelect } = props;

    return (
        <div className={style.contact} onClick={onSelect}>
            <div className={style.title}>{title}</div>
            <div className={style.thumb}><img src={image} /></div>
        </div>
    )
}

Contact.propTypes = {
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired
}

export default Contact;
