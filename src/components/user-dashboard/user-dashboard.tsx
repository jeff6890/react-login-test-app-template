import classNames from 'classnames';
import styles from './user-dashboard.module.scss';
import Userfront from '@userfront/toolkit/react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { LogoutButton } from '../logout-button/logout-button';

export interface UserDashboardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const UserDashboard = ({ className }: UserDashboardProps) => {
    if (!Userfront.accessToken()) {
        return <Navigate to={{ pathname: '/login' }} />;
    }

    return (
        <div className={styles.dashboard}>
            <div className={styles.sideMenu}>
                <ul className={styles.sideMenuItems}>
                    <li>
                        <Link to="/" className={styles.link}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className={styles.link}>
                            User API
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className={styles.link}>
                            Marketplace API
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className={styles.link}>
                            Friends API
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className={styles.link}>
                            Groups API
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className={styles.link}>
                            Rooms API
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.dashboardPanel}>
                <h2>Dashboard</h2>
                <LogoutButton />
            </div>
        </div>
    );
};

// const [privateData, setPrivateData] = useState<{ someSecretData: string }>();

// useEffect(() => {
//     (async () => {
//         try {
//             const result = await fetch('http://localhost:3010/data', {
//                 headers: {
//                     Authorization: `Bearer ${Userfront.accessToken()}`,
//                 },
//             }).then((response) => response.json());
//             setPrivateData(result);
//         } catch (error) {
//             console.log(error);
//         }
//     })();
// }, []);

// if (!Userfront.accessToken()) {
//     return <Navigate to={{ pathname: '/login' }} />;
// }

// const useData = JSON.parse(atob(Userfront.accessToken().split('.')[1]));

// return (
//     <div>
//         <h2>Dashboard</h2>
//         <h3>User Data</h3>
//         <pre>{JSON.stringify(useData, null, 2)}</pre>
//         <h3>Private Data</h3>
//         <pre>{JSON.stringify(privateData, null, 2)}</pre>
//         <LogoutButton />
//     </div>
// );

