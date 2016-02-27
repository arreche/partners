import React from 'react';
import { Route } from 'react-router';

import Main from '../containers/main/main';
import ContactDetailContainer from '../containers/contactDetailContainer/contactDetailContainer';

export default (
    <Route path='/' component={Main}>
        <Route path='contacts/:id'  component={ContactDetailContainer} />
    </Route>
)
