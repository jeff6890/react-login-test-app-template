import React from 'react';
import classNames from 'classnames';
import styles from './change-username-form.module.scss';
import Userfront from '@userfront/toolkit/react';

export interface ChangeUsernameFormProps {
    className?: string;
    habboName?: string;
}

// Define the ChangeUsername form component
export class ChangeUsernameForm extends React.Component {
    constructor(props: ChangeUsernameFormProps) {
        super(props);
        this.state = {
            username: '',
            name: '',
            accountName: '',
            alertMessage: '',
            habboName: props.habboName,
            success: false,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAlertMessage = this.setAlertMessage.bind(this);
    }

    // Whenever an input changes value, change the corresponding state variable
    handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value,
        });
    }

    // Handle the form submission by calling Userfront.signup()
    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Reset the alert to empty
        this.setAlertMessage('');

        //Call this.changeUsernameAPI()
        this.changeUsernameAPI()

        //Set this.state.success to true
        this.setState({ success: true });

        // Call Userfront.user.update()
        // Userfront.user.update({

        //     name: "getter",
        //     username: "getter",
        //     email: "getter@HabCloud.com",
        //     // name: this.state.habboName,
        //     // username: this.state.habboName,

        // }).catch((error: { message: string }) => {
        //     if (error.message === "Email exists") {
        //         this.setAlertMessage("A HabCloud account is already registered with this username.");
        //     }
        //     else if (error.message === "Password must be at least 16 characters OR at least 8 characters including a number and a letter") {
        //         this.setAlertMessage("Password must be at least 16 characters OR at least 8 characters including a number and a letter.");
        //     }
        //     else {
        //         this.setAlertMessage(error.message);
        //     }
        // });

    }

    setAlertMessage(message: string) {
        this.setState({ alertMessage: message });
    }

    async changeUsernameAPI() {
        try {
            const payload = {
                email: `${this.state.habboName}@HabCloud.com`,
                username: this.state.habboName,
                name: this.state.habboName,
            };

            const response = await fetch(`https://api.userfront.com/v0/tenants/7n88yrpn/users/${Userfront.user.userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer uf_test_admin_7n88yrpn_0116e54a678649be242772c0c3da558b"
                },
                body: JSON.stringify(payload)
            });

            console.log(response.json());
        } catch (error) {
            console.error('Error updating username:', error);
        }
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.login}>
                    <Alert message={this.state.alertMessage} />
                    <div className={styles.wrapper}>
                        <form onSubmit={this.handleSubmit} className={styles.form}>
                            <h1>Change Username</h1>
                            <div className={styles['input-box']}>
                                <input
                                    name="habboName"
                                    type="text"
                                    value={this.state.habboName}
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
                                    <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                                </svg>
                            </div>
                            {!this.state.success && (
                                <button type="submit" className={styles.btn}>
                                    Change Username
                                </button>
                            )}
                        </form>
                    </div>
                    <div className={styles.success}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)' }}>
                                <path d="M4.035 15.479A3.976 3.976 0 0 0 4 16c0 2.378 2.138 4.284 4.521 3.964C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.036C17.857 20.284 20 18.378 20 16c0-.173-.012-.347-.035-.521C21.198 14.786 22 13.465 22 12s-.802-2.786-2.035-3.479C19.988 8.347 20 8.173 20 8c0-2.378-2.143-4.288-4.521-3.964C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.036C6.138 3.712 4 5.622 4 8c0 .173.012.347.035.521C2.802 9.214 2 10.535 2 12s.802 2.786 2.035 3.479zm1.442-5.403 1.102-.293-.434-1.053A1.932 1.932 0 0 1 6 8c0-1.103.897-2 2-2 .247 0 .499.05.73.145l1.054.434.293-1.102a1.99 1.99 0 0 1 3.846 0l.293 1.102 1.054-.434C15.501 6.05 15.753 6 16 6c1.103 0 2 .897 2 2 0 .247-.05.5-.145.73l-.434 1.053 1.102.293a1.993 1.993 0 0 1 0 3.848l-1.102.293.434 1.053c.095.23.145.483.145.73 0 1.103-.897 2-2 2-.247 0-.499-.05-.73-.145l-1.054-.434-.293 1.102a1.99 1.99 0 0 1-3.846 0l-.293-1.102-1.054.434A1.935 1.935 0 0 1 8 18c-1.103 0-2-.897-2-2 0-.247.05-.5.145-.73l.434-1.053-1.102-.293a1.993 1.993 0 0 1 0-3.848z"></path>
                                <path d="m15.742 10.71-1.408-1.42-3.331 3.299-1.296-1.296-1.414 1.414 2.704 2.704z"></path>
                            </svg>
                        </div>
                        {!this.state.success && (
                            <div>
                                Verification successful, you can now update your HabCloud username.
                                Your HabCloud username will update to match your current Habbo username.
                            </div>
                        )}
                        {this.state.success && (
                            <div>
                                Your HabCloud username was successfully updated.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
};

// Define the alert component
export class Alert extends React.Component<{ message: string }> {
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