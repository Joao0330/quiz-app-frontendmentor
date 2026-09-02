import htmlIcon from '../assets/images/icon-html.svg';
import cssIcon from '../assets/images/icon-css.svg';
import jsIcon from '../assets/images/icon-js.svg';
import accessibilityIcon from '../assets/images/icon-accessibility.svg';

export const quizzes = {
	HTML: {
		url: '/html',
		icon: htmlIcon,
		alt: 'HTML icon',
		bgColor: 'bg-orange-50',
	},
	CSS: {
		url: '/css',
		icon: cssIcon,
		alt: 'CSS icon',
		bgColor: 'bg-green-100',
	},
	JavaScript: {
		url: '/javascript',
		icon: jsIcon,
		alt: 'JavaScript icon',
		bgColor: 'bg-blue-50',
	},
	Accessibility: {
		url: '/accessibility',
		icon: accessibilityIcon,
		alt: 'Accessibility icon',
		bgColor: 'bg-purple-100',
	},
} as const;

export type QuizCategory = keyof typeof quizzes;
