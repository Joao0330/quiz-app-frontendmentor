import { Header } from '@/components/Header';
import { Outlet } from 'react-router';

export const WelcomeLayout = () => {
	return (
		<>
			<Header view='welcomeView' />
			<main>
				<Outlet />
			</main>
		</>
	);
};
