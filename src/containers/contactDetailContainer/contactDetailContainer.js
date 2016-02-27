import React from 'react';
import contactsStore from '../../stores/contactsStore';
import ContactDetail from '../../components/contactDetail/contactDetail';

class ContactDetailContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = { contact: null };
    }

    componentDidMount() {
        return this.loadContact(this.props.params.id);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.params.id === this.props.params.id) return;

        return this.loadContact(newProps.params.id);
    }

    loadContact(id) {
        return contactsStore.loadContact(parseInt(id))
            .then((contact) => {
                this.setState({ contact: contact });
            })
    }

    render() {
        return this.state.contact == null ?
            <div>Loading...</div> :
            <ContactDetail contact={this.state.contact} />
    }
}

export default ContactDetailContainer;
