import { createBrowserRouter } from 'react-router';
import { WelcomeLayout } from './pages/_layout/WelcomeLayout';
import { Welcome } from './pages/Welcome';
import { QuestionLayout } from './pages/_layout/QuestionLayout';

export const router = createBrowserRouter([
	{
		element: <WelcomeLayout />,
		children: [{ path: '/', element: <Welcome /> }],
	},
	{
		element: <QuestionLayout />,
		children: [
			{ path: '/html', element: <div>HTML</div> },
			{ path: '/css', element: <div>CSS</div> },
			{ path: '/javascript', element: <div>Javascript</div> },
			{ path: '/accessibility', element: <div>Accessibility</div> },
		],
	},
]);
