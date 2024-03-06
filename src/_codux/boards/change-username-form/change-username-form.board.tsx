import { createBoard } from '@wixc3/react-board';
import { ChangeUsernameForm } from '../../../components/change-username-form/change-username-form';

export default createBoard({
    name: 'ChangeUsernameForm',
    Board: () => <ChangeUsernameForm />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 790,
    },
});
