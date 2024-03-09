import React from 'react';
import classNames from 'classnames';
import styles from './logout-button.module.scss';
import Userfront from '@userfront/toolkit/react';

export const LogoutButton: React.FC<{ className?: string }> = ({ className }) => {
    const [disabled, setDisabled] = React.useState(() => !Userfront.accessToken());

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        Userfront.logout();
    };

    return (
        <button
            id="logout-button"
            onClick={handleClick}
            disabled={disabled}
            className={styles.btn}
        >
            Log out
        </button>
    );
};