import React from 'react';
import classNames from 'classnames';
import styles from './password-reset-form.module.scss';
import Userfront from '@userfront/toolkit/react';

export interface PasswordResetFormProps {
    className?: string;
    habboName?: string;
}

export class PasswordResetForm extends React.Component {
    constructor(props: PasswordResetFormProps) {
        super(props);
        this.state = {
            password: '',
            passwordVerify: '',
            alertMessage: '',
            token: '',
            uuid: '',
            habboName: props.habboName,
            userLinkInfo: {},
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
            token: this.state.token,
            uuid: this.state.uuid,
        }).catch((error: { message: string }) => {
            this.setAlertMessage(error.message);
        });
    }

    setAlertMessage(message: string = '') {
        this.setState({ alertMessage: message });
    }

    async generateUserLinkAPI() {
        try {
            const payload = {
                email: `${this.state.habboName}@HabCloud.com`,
                options: {
                    "type": "reset",
                }
            };

            const response = await fetch("https://api.userfront.com/v0/tenants/7n88yrpn/auth/link/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer uf_test_admin_7n88yrpn_0116e54a678649be242772c0c3da558b"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Failed to generate user link');
            }

            const data = await response.json();
            this.setState({ userLinkInfo: data }, () => {
                if (this.state.userLinkInfo && this.state.userLinkInfo.result) {
                    this.setState({ token: this.state.userLinkInfo.result.token });
                    this.setState({ uuid: this.state.userLinkInfo.result.uuid });
                }
            });
        } catch (error) {
            console.error('Error generating user link:', error);
        }
    }

    componentDidMount() {
        this.generateUserLinkAPI()
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
                    <div className={styles.success}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)' }}>
                                <path d="M4.035 15.479A3.976 3.976 0 0 0 4 16c0 2.378 2.138 4.284 4.521 3.964C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.036C17.857 20.284 20 18.378 20 16c0-.173-.012-.347-.035-.521C21.198 14.786 22 13.465 22 12s-.802-2.786-2.035-3.479C19.988 8.347 20 8.173 20 8c0-2.378-2.143-4.288-4.521-3.964C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.036C6.138 3.712 4 5.622 4 8c0 .173.012.347.035.521C2.802 9.214 2 10.535 2 12s.802 2.786 2.035 3.479zm1.442-5.403 1.102-.293-.434-1.053A1.932 1.932 0 0 1 6 8c0-1.103.897-2 2-2 .247 0 .499.05.73.145l1.054.434.293-1.102a1.99 1.99 0 0 1 3.846 0l.293 1.102 1.054-.434C15.501 6.05 15.753 6 16 6c1.103 0 2 .897 2 2 0 .247-.05.5-.145.73l-.434 1.053 1.102.293a1.993 1.993 0 0 1 0 3.848l-1.102.293.434 1.053c.095.23.145.483.145.73 0 1.103-.897 2-2 2-.247 0-.499-.05-.73-.145l-1.054-.434-.293 1.102a1.99 1.99 0 0 1-3.846 0l-.293-1.102-1.054.434A1.935 1.935 0 0 1 8 18c-1.103 0-2-.897-2-2 0-.247.05-.5.145-.73l.434-1.053-1.102-.293a1.993 1.993 0 0 1 0-3.848z"></path>
                                <path d="m15.742 10.71-1.408-1.42-3.331 3.299-1.296-1.296-1.414 1.414 2.704 2.704z"></path>
                            </svg>
                        </div>
                        <div>
                            Verification successful, you can now reset your HabCloud password.
                        </div>
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
