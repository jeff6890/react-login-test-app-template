import classNames from 'classnames';
import styles from './signup-form.module.scss';

export interface SignupFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SignupForm = ({ className }: SignupFormProps) => {
    return <div className={classNames(styles.root, className)}>SignupForm</div>;
};
