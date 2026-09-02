import { createBrowserRouter } from 'react-router';

import { Welcome } from './pages/Welcome';
import { QuestionPage } from './pages/QuestionPage';

export const router = createBrowserRouter([
	{
		children: [
			{ path: '/', element: <Welcome /> },
			{ path: '/html', element: <QuestionPage category='HTML' /> },
			{ path: '/css', element: <QuestionPage category='CSS' /> },
			{ path: '/javascript', element: <QuestionPage category='JavaScript' /> },
			{ path: '/accessibility', element: <QuestionPage category='Accessibility' /> },
		],
	},
]);
