import sunIconLight from '../assets/images/icon-sun-light.svg';
import sunIconDark from '../assets/images/icon-sun-dark.svg';
import moonIconLight from '../assets/images/icon-moon-light.svg';
import moonIconDark from '../assets/images/icon-moon-dark.svg';
import { useState } from 'react';

export const ThemeBtn = () => {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
	};

	return (
		<div className='flex items-center gap-2 md:gap-4'>
			<img src={theme === 'light' ? sunIconDark : sunIconLight} alt='Icon image for the light theme' className='w-4 h-4 md:w-6 md:h-6' />
			<button className='relative w-8 h-5 bg-purple-600 rounded-r-full rounded-l-full outline-none cursor-pointer md:w-12 md:h-7' onClick={toggleTheme}>
				<span
					className={`absolute left-1 top-1 w-3 h-3 rounded-full bg-white transition-transform duration-300 md:w-5 md:h-5 ${theme === 'light' ? 'translate-x-0' : 'translate-x-3 md:translate-x-5'}`}
				/>
			</button>
			<img src={theme === 'light' ? moonIconDark : moonIconLight} alt='Icon image for the dark theme' className='w-4 h-4 md:w-6 md:h-6' />
		</div>
	);
};
