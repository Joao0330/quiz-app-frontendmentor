import { createBrowserRouter } from 'react-router';

import { Welcome } from './pages/Welcome';

export const router = createBrowserRouter([
	{
		children: [
			{ path: '/', element: <Welcome /> },
			{ path: '/html', element: <div>HTML</div> },
			{ path: '/css', element: <div>CSS</div> },
			{ path: '/javascript', element: <div>Javascript</div> },
			{ path: '/accessibility', element: <div>Accessibility</div> },
		],
	},
]);
