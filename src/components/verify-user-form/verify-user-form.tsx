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
            currentMotto: '',
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

    async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        this.setAlertMessage('');

        const HabboUser = await this.HabboAPIVerifyUser(this.state.habboUsername);

        console.log(HabboUser.motto);
        console.log(HabboUser);

        if (HabboUser.motto === this.state.habboMottoVerifyCode) {
            return this.setAlertMessage('Sucessfully Verified!');
        }

        if (HabboUser.motto !== this.state.habboMottoVerifyCode) {
            return this.setAlertMessage(
                `Invalid: Your Habbo motto doesn't match the verification code below.`,
                `Your current Habbo motto: ${HabboUser.motto}`,
            );
        }

        // // Call Userfront.resetPassword()
        // // Assuming Userfront is defined elsewhere
        // Userfront.resetPassword({
        //     password: this.state.password,
        // }).catch((error: { message: string }) => {
        //     this.setAlertMessage(error.message);
        // });
    }

    setAlertMessage(message: string = '', motto: string = '') {
        this.setState({ alertMessage: message });
        this.setState({ currentMotto: motto });
    }

    generateHabCloudVerifyCode() {
        const randomNumber = Math.floor(Math.random() * 900) + 100;
        return `HabCloud-${randomNumber}`;
    }

    async HabboAPIVerifyUser(username: string) {
        try {
            const response = await fetch(
                `https://www.habbo.com/api/public/Users?name=${username.trim()}`,
            );
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }

    componentDidMount() {
        this.setState({ habboMottoVerifyCode: this.generateHabCloudVerifyCode() });
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.login}>
                    <Alert message={this.state.alertMessage} motto={this.state.currentMotto} />
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
                                    <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
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
                    <div className={styles.info}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)' }}>
                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                                <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                            </svg>
                        </div>
                        <div>To verify, type your Habbo username and copy/paste the code above into your Habbo motto to sign up.</div>
                    </div>
                </div>
            </div>
        );
    }
}

class Alert extends React.Component<{ message: string; motto: string }> {
    render() {
        if (!this.props.message) return null;
        if (!this.props.motto) return null;
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
                    <div>{this.props.motto}</div>
                </div>
            </div>
        );
    }
}
