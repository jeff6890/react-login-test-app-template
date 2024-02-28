import React from 'react';
import classNames from 'classnames';
import styles from './password-reset-form.module.scss';
import Userfront from '@userfront/toolkit/react';

export interface PasswordResetFormProps {
    className?: string;
}

export class PasswordResetForm extends React.Component {
    constructor(props: PasswordResetFormProps) {
        super(props);
        this.state = {
            password: '',
            passwordVerify: '',
            alertMessage: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAlertMessage = this.setAlertMessage.bind(this);
    }

    handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        const target = event.target as HTMLInputElement;
        this.setState({
            [target.name]: target.value,
        });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        this.setAlertMessage('');

        if (this.state.password !== this.state.passwordVerify) {
            return this.setAlertMessage('Passwords must match');
        }

        // Call Userfront.resetPassword()
        // Assuming Userfront is defined elsewhere
        Userfront.resetPassword({
            password: this.state.password,
        }).catch((error: { message: string }) => {
            this.setAlertMessage(error.message);
        });
    }

    setAlertMessage(message: string = '') {
        this.setState({ alertMessage: message });
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.login}>
                    <Alert message={this.state.alertMessage} />
                    <div className={styles.wrapper}>
                        <form onSubmit={this.handleSubmit}>
                            <h1>Password Reset</h1>
                            <div className={styles['input-box']}>
                                <input
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    placeholder="New Password"
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
                            <div className={styles['input-box']}>
                                <input
                                    name="passwordVerify"
                                    type="password"
                                    value={this.state.passwordVerify}
                                    onChange={this.handleInputChange}
                                    placeholder="Re-type Password"
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
                            <button type="submit" className={styles.btn}>Reset password</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

class Alert extends React.Component<{ message: string }> {
    render() {
        if (!this.props.message) return null;
        return <div id="alert">{this.props.message}</div>;
    }
}
