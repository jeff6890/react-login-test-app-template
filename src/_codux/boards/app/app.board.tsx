import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1156,
        canvasHeight: 871,
        windowHeight: 863,
        windowWidth: 1216,
    },
});
