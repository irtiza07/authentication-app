import React, { Component } from 'react'

export default class Weather extends Component {
    state = {
        currentUserName: '',
        currentUserEmail: ''
    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState( {
            currentUserName : idToken.idToken.claims.name,
            currentUserEmail : idToken.idToken.claims.email
        });
    }

    render() {
        const { currentUserEmail, currentUserName } = this.state;
        return (
        <div>
            <h1>Welcome {currentUserName}</h1>
            <h3> Email: {currentUserEmail}</h3>
            <p>
                You have been authorized access to the protected page. Enjoy!
            </p>
        </div>
        )
    }
}
