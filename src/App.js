import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {  withAuthenticator } from 'aws-amplify-react';
Amplify.configure(aws_exports);


class App extends Component {
    render() {
        return (
            <div>
                <Header as='h1'>Hello World!</Header>
            </div>
        );
    }
}

const signUpConfig = {
    hideAllDefaults: true,
    signUpFields: [
        {
            label: 'Email',
            key: 'username',
            required: true,
            placeholder: 'Email',
            type: 'email',
            displayOrder: 1,
        },
        {
            label: 'Name',
            key: 'name',
            required: true,
            placeholder: 'Full name',
            type: 'name',
            displayOrder: 2
        },
        {
            label: 'Password',
            key: 'password',
            required: true,
            placeholder: 'Password',
            type: 'password',
            displayOrder: 3,
        }
    ],
}

export default withAuthenticator(App, {signUpConfig});
