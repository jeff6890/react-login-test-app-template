import { createBoard } from '@wixc3/react-board';
import { UserDashboard } from '../../../components/user-dashboard/user-dashboard';

export default createBoard({
    name: 'UserDashboard',
    Board: () => <UserDashboard />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1082,
        canvasHeight: 640,
    },
});
