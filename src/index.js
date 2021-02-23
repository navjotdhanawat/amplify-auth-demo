import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Amplify from 'aws-amplify'
const oauth = {
    domain: 'navjottest1.auth.ap-south-1.amazoncognito.com',
    scope: [
        'phone',
        'email',
        'profile',
        'openid',
        'aws.cognito.signin.user.admin'
    ],
    redirectSignIn: 'http://localhost:3000/',
    redirectSignOut: 'http://localhost:3000/',
    responseType: 'token'
};
Amplify.configure({
    Auth: {
        oauth: oauth,
        identityPoolId: 'ap-south-1:7ab7150f-8703-4b9d-89eb-f1018e5dd2c4',  // (Federated Identities > Selected Identity Pool/Create new > Sample code > Select Javascript > Get AWS Credentials)
        region: 'ap-south-1', // (User pools > General Settings > Pool Id) The first part of the Pool Id us-east-1
        userPoolId: 'ap-south-1_jlPdqBqBo', // (User pools > General Settings > Pool Id)
        userPoolWebClientId: '5pep6hr8698icl4u0mhha55c8l', // (User pools > General Settings > App clients > App client id)
    },
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
