import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './login-form.module.scss';
import Userfront from '@userfront/toolkit/react';

export interface LoginFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailOrUsername: '',
            password: '',
            alertMessage: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAlertMessage = this.setAlertMessage.bind(this);
    }

    // Whenever an input changes value, change the corresponding state variable
    handleInputChange = (event) => {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // Reset the alert to empty
        this.setAlertMessage('');
        // Call Userfront.login()
        Userfront.login({
            method: 'password',
            emailOrUsername: this.state.emailOrUsername,
            password: this.state.password,
        }).catch((error) => {
            this.setAlertMessage(error.message);
        });
    };

    setAlertMessage = (message) => {
        this.setState({ alertMessage: message });
    };

    render() {
        return (
            <div className={styles.login}>
                <div className={styles.login}>
                    <p>or</p>
                    <Alert message={this.state.alertMessage} />
                    <form onSubmit={this.handleSubmit} className={styles.form}>
                        <label>Email or username</label>
                        <input
                            name="emailOrUsername"
                            type="text"
                            value={this.state.emailOrUsername}
                            onChange={this.handleInputChange}
                        />
                        <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <button type="submit">Log in</button>
                    </form>
                </div>
            </div>
        );
    }
}

// Define the alert component
class Alert extends Component {
    render() {
        if (!this.props.message) return null;
        return <div id="alert">{this.props.message}</div>;
    }
}

// Define the Single Sign-on (SSO) button
class SSOButton extends Component {
    handleClick = (event) => {
        Userfront.login({ method: this.props.provider });
        event.preventDefault();
    };

    render() {
        return <button onClick={this.handleClick}>Log in with {this.props.provider}</button>;
    }
}
