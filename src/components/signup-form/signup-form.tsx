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
        username: "",
        name: "",
        accountName: "",
        password: "",
        passwordVerify: "",
        alertMessage: ""
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
        [target.name]: target.value
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
        method: "password",
        email: "Playboy@Playboy.com",
        name: "Playboy",
        username: "Playboy",
        password: this.state.password,
        data: {
          accountName: this.state.accountName
        }
      }).catch((error: { message: string }) => {
        this.setAlertMessage(error.message);
      });
    }
  
    setAlertMessage(message: string) {
      this.setState({ alertMessage: message });
    }
  
    render() {
      return (
        <div>
          <Alert message={this.state.alertMessage} />
          <form onSubmit={this.handleSubmit}>
            <label>
              Account name (custom field)
              <input
                name="accountName"
                type="text"
                value="hello"
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Password
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Verify password
              <input
                name="passwordVerify"
                type="password"
                value={this.state.passwordVerify}
                onChange={this.handleInputChange}
              />
            </label>
            <button type="submit">Sign up</button>
          </form>
  
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
