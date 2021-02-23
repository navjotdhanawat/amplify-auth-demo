import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Amplify from 'aws-amplify'
const oauth = {
    domain: 'auth8804.auth.ap-south-1.amazoncognito.com',
    scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
    redirectSignIn: 'http://localhost:3000/',
    redirectSignOut: 'http://localhost:3000/',
    responseType: 'code'
  };
Amplify.configure({
    Auth: {
        oauth: oauth,
        identityPoolId: 'ap-south-1:4bf92106-96ea-4029-943c-a1993b10ba94',  // (Federated Identities > Selected Identity Pool/Create new > Sample code > Select Javascript > Get AWS Credentials)
        region: 'ap-south-1', // (User pools > General Settings > Pool Id) The first part of the Pool Id us-east-1
        userPoolId: 'ap-south-1_HnRx9QnN1', // (User pools > General Settings > Pool Id)
        userPoolWebClientId: '25ivmj0thr0o32uhu2nq77dumo', // (User pools > General Settings > App clients > App client id)
    },
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
