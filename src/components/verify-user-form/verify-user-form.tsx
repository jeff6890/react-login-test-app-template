import React from 'react';
import classNames from 'classnames';
import styles from './verify-user-form.module.scss';
import Userfront from '@userfront/toolkit/react';

export interface VerifyUserFormProps {
    className?: string;
}

export class VerifyUserForm extends React.Component {
    constructor(props: VerifyUserFormProps) {
        super(props);
        this.state = {
            habboUsername: '',
            habboMottoVerifyCode: '',
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

    generateHabCloudVerifyCode() {
        const randomNumber = Math.floor(Math.random() * 900) + 100;
        return `HabCloud-${randomNumber}`;
    }

    componentDidMount() {
        this.setState({ habboMottoVerifyCode: this.generateHabCloudVerifyCode() });
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.login}>
                    <Alert message={this.state.alertMessage} />
                    <div className={styles.wrapper}>
                        <form onSubmit={this.handleSubmit}>
                            <h1>Verify Habbo User</h1>
                            <div className={styles['input-box']}>
                                <input
                                    name="habboUsername"
                                    type="text"
                                    value={this.state.habboUsername}
                                    onChange={this.handleInputChange}
                                    placeholder="Habbo Username"
                                    required
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    style={{ fill: 'rgba(255, 255, 255, 1)' }}
                                >
                                    <path d="M20.29 8.29 16 12.58l-1.3-1.29-1.41 1.42 2.7 2.7 5.72-5.7zM4 8a3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4 3.91 3.91 0 0 0-4 4zm6 0a1.91 1.91 0 0 1-2 2 1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2zM4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></path>
                                </svg>
                            </div>
                            <div className={styles['input-box']}>
                                <input
                                    name="habboMottoVerifyCode"
                                    type="text"
                                    value={this.state.habboMottoVerifyCode}
                                    onChange={this.handleInputChange}
                                    disabled
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    style={{ fill: 'rgba(255, 255, 255, 1)' }}
                                >
                                    <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z"></path>
                                    <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z"></path>
                                </svg>
                            </div>
                            <button type="submit" className={styles.btn}>
                                Verify
                            </button>
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
