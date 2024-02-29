import React from 'react';
import classNames from 'classnames';
import styles from './signup-form.module.scss';
import Userfront from '@userfront/toolkit/react';

export interface SignupFormProps {
  className?: string;
}

// Define the Signup form component
export class SignupForm extends React.Component {
  constructor(props: SignupFormProps) {
    super(props);
    this.state = {
      username: '',
      name: '',
      accountName: '',
      password: '',
      passwordVerify: '',
      alertMessage: '',
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
    // Verify that the passwords match
    if (this.state.password !== this.state.passwordVerify) {
      return this.setAlertMessage('Passwords must match');
    }
    // Call Userfront.signup()
    Userfront.signup({
      method: 'password',
      email: 'Playboy@Playboy.com',
      name: 'Playboy',
      username: 'Playboy',
      password: this.state.password,
      data: {
        accountName: this.state.accountName,
      },
    }).catch((error: { message: string }) => {
      this.setAlertMessage(error.message);
    });
  }

  setAlertMessage(message: string) {
    this.setState({ alertMessage: message });
  }

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.login}>
          <Alert message={this.state.alertMessage} />
          <div className={styles.wrapper}>
            <form onSubmit={this.handleSubmit} className={styles.form}>
              <h1>Sign Up</h1>
              <div className={styles['input-box']}>
                <input
                  name="accountName"
                  type="text"
                  value="hello"
                  onChange={this.handleInputChange}
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
              <button type="submit" className={styles.btn}>
                Sign up
              </button>
            </form>
          </div>
        </div>
        {/* <SSOButton provider="google" /> */}
      </div>
    );
  }
}

// Define the alert component
export class Alert extends React.Component<{ message: string }> {
  render() {
    if (!this.props.message) return null;
    return <div id="alert">{this.props.message}</div>;
  }
}

//   // Define the Single Sign-on (SSO) button
//   export class SSOButton extends React.Component<{ provider: string }> {
//     handleClick(event: React.MouseEvent<HTMLButtonElement>) {
//       Userfront.login({ method: this.props.provider });
//       event.preventDefault();
//     }

//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           Sign up with {this.props.provider}
//         </button>
//       );
//     }
//   }
