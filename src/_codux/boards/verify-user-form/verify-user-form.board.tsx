import { createBoard } from '@wixc3/react-board';
import { VerifyUserForm } from '../../../components/verify-user-form/verify-user-form';

export default createBoard({
    name: 'VerifyUserForm',
    Board: () => <VerifyUserForm />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 476,
        canvasWidth: 697,
    },
});
