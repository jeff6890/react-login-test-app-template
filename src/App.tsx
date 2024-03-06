import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './App.module.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
} from 'react-router-dom';
import Userfront, { LogoutButton } from "@userfront/toolkit/react";
// import Userfront, { SignupForm, LoginForm, PasswordResetForm, LogoutButton } from "@userfront/toolkit/react";
import { LoginForm } from './components/login-form/login-form';
import { PasswordResetForm } from './components/password-reset-form/password-reset-form';
import { SignupForm } from './components/signup-form/signup-form';
import { VerifyUserForm } from './components/verify-user-form/verify-user-form';

Userfront.init("7n88yrpn");

function App() {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='login'>Login</Link>
                        </li>
                        <li>
                            <Link to='reset'>Password Reset</Link>
                        </li>
                        {Userfront.accessToken() && (
                            <>
                                <li>
                                    <Link to='dashboard'>Dashboard</Link>
                                </li>
                                <li>
                                    <Link to='changeusername'>Change Username</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reset" element={<PasswordReset />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/changeusername" element={<ChangeUsername />} />
                </Routes>
            </div>
        </Router>
    );
}

const Home = () => (
    <div>
        <h2>Sign Up</h2>
        <VerifyUserForm signUp={true} />
    </div>
);
const Login = () => (
    <div>
        <h2>Login</h2>
        <LoginForm />
    </div>
);
const PasswordReset = () => (
    <div>
        <h2>PasswordReset</h2>
        <VerifyUserForm passwordReset={true} />
    </div>
);
const ChangeUsername = () => (
    <div>
        <h2>Change Username</h2>
        <VerifyUserForm changeUsername={true} />
    </div>
);
const Dashboard = () => {

    const [privateData, setPrivateData] = useState<{ someSecretData: string }>();

    useEffect(() => {
        (async () => {
            try {
                const result = await fetch('http://localhost:3010/data', {
                    headers: {
                        Authorization: `Bearer ${Userfront.accessToken()}`
                    }
                })
                    .then(response => response.json());
                setPrivateData(result);
            } catch (error) {
                console.log(error);
            }
        })();

    }, [])

    if (!Userfront.accessToken()) {
        return (
            <Navigate to={{ pathname: '/login' }} />
        );
    }

    // console.log(Userfront);
    console.log(Userfront.accessToken());
    const useData = JSON.parse(atob(Userfront.accessToken().split('.')[1]));

    return <div>
        <h2>Dashboard</h2>
        <h3>User Data</h3>
        <pre>{JSON.stringify(useData, null, 2)}</pre>
        <h3>Private Data</h3>
        <pre>{JSON.stringify(privateData, null, 2)}</pre>
        <LogoutButton theme={{ "colors": { "light": "#ffffff", "dark": "#263dbf", "accent": "#13a0ff", "lightBackground": "#fdfdfd" }, "colorScheme": "light", "fontFamily": "Avenir, Helvetica, Arial, sans-serif", "size": "default", "extras": {} }} />
    </div>
};

export default App;
