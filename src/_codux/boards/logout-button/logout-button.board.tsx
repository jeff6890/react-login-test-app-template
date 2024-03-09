import { createBoard } from '@wixc3/react-board';
import { LogoutButton } from '../../../components/logout-button/logout-button';

export default createBoard({
    name: 'LogoutButton',
    Board: () => <LogoutButton />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 443,
    },
});
