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
    constructor(props: LoginFormProps) {
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
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name as string]: target.value,
        });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Reset the alert to empty
        this.setAlertMessage('');
        // Call Userfront.login()
        Userfront.login({
            method: 'password',
            emailOrUsername: this.state.emailOrUsername,
            password: this.state.password,
        }).catch((error: { message: string }) => {
            if (error.message === "Incorrect username or password") {
                this.setAlertMessage("Incorrect username or password.");
            }
            else {
                this.setAlertMessage(error.message);
            }
        });
    };

    setAlertMessage = (message: string) => {
        this.setState({ alertMessage: message });
    };

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.login}>
                    <Alert message={this.state.alertMessage} />
                    <div className={styles.wrapper}>
                        <form onSubmit={this.handleSubmit} className={styles.form}>
                            <h1>Login</h1>
                            <div className={styles['input-box']}>
                                <input
                                    name="emailOrUsername"
                                    type="text"
                                    value={this.state.emailOrUsername}
                                    onChange={this.handleInputChange}
                                    placeholder="Username"
                                    required
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    style={{ fill: 'rgba(255, 255, 255, 1)' }}
                                >
                                    <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                                </svg>
                            </div>
                            <div className={styles['input-box']}>
                                <input
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    placeholder="Password"
                                    required
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    style={{ fill: 'rgba(255, 255, 255, 1)' }}
                                >
                                    <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path>
                                </svg>
                            </div>
                            <div className={styles['remember-forgot']}>
                                <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit" className={styles.btn}>
                                Log in
                            </button>
                            <div className={styles['register-link']}>
                                <p>
                                    Don't have an account? <a href="#">Register</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// Define the alert component
class Alert extends Component<{ message: string }> {
    render() {
        if (!this.props.message) return null;
        return (
            <div id="alert">
                <div className={styles.alert}>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style={{ fill: 'rgba(255, 255, 255, 1)' }}
                        >
                            <path d="M20.707 15.293 19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path>
                            <path d="M8.037 10h7.926v2H8.037z"></path>
                        </svg>
                    </div>
                    <div>{this.props.message}</div>
                </div>
            </div>
        );
    }
}

// Define the Single Sign-on (SSO) button
class SSOButton extends Component<{ provider: string }> {
    handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        Userfront.login({ method: this.props.provider });
        event.preventDefault();
    };

    render() {
        return <button onClick={this.handleClick}>Log in with {this.props.provider}</button>;
    }
}
