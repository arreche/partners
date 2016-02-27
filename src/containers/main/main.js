import  React, { Component } from 'react';
import { hashHistory } from 'react-router';

import Toolbar from '../../components/toolbar/toolbar';
import Contacts from '../../containers/contacts/contacts';
import contacsStore from '../../stores/contactsStore';

import style from './style.css';


export default class Main extends Component {
    // static contextTypes = {
    //     router: React.PropTypes.object.isRequired
    // };

    constructor(props) {
        super(props);
        this.state = { contacts: [], selectedContactId: 0 };
    }

    componentDidMount() {
        contacsStore.loadContacts().then((contacts) => {
            if (contacts.length > 0) {
                this.setState({ contacts: contacts , selectedContactId : contacts[0].id });
                hashHistory.push('/contacts/' + contacts[0].id);
            }
        })
    }

    render() {
        const { contacts, currentContact } = this.state;

        return (
            <div>
                <div className={style.toolbar}>
                    <Toolbar onSearch={this.onSearch}
                             onEdit={this.onEdit}
                             onNew={this.onNew}>
                    </Toolbar>
                </div>

                <div className={style.mainPanel}>
                    <div className="{style.navPanel}">
                        <Contacts contacts={contacts} onSelect={this.onSelect.bind(this)}>
                        </Contacts>
                    </div>

                    <div className={style.contentPanel}>
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }

    onSearch(text) {
        console.log('search...' + text);
    };

    onEdit() {
        console.log('edit...');
    };

    onSelect(contactId) {
        this.setState({
            selectedContactId : contactId
        });
        hashHistory.push('/contacts/' + contactId);
    }

    onNew() {
        console.log('new...');
    };

}
