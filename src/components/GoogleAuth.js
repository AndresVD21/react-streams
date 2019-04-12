import React, { Component } from 'react';

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '193835726025-u2o0fqvjrjtaj6gcge723ddtppm1he8q.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        );
    }
}
export default GoogleAuth;