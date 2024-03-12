import { createBoard } from '@wixc3/react-board';
import { Profile } from '../../../components/profile/profile';

export default createBoard({
    name: 'Profile',
    Board: () => <Profile />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 780,
        canvasWidth: 1314,
        windowHeight: 702,
    },
});
