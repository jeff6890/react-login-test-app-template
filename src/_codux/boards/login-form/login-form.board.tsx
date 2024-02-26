import { createBoard } from '@wixc3/react-board';
import { LoginForm } from '../../../components/login-form/login-form';

export default createBoard({
    name: 'LoginForm',
    Board: () => <LoginForm />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 391,
        canvasWidth: 337,
    },
});
