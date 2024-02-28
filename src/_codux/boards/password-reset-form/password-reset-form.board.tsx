import { createBoard } from '@wixc3/react-board';
import { PasswordResetForm } from '../../../components/password-reset-form/password-reset-form';

export default createBoard({
    name: 'PasswordResetForm',
    Board: () => <PasswordResetForm />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 664,
        canvasHeight: 457,
    },
});
