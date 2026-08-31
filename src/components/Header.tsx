interface HeaderProps {
	view: 'welcomeView' | 'QuestionView';
}

export const Header = ({ view }: HeaderProps) => {
	return (
		<header>
			<h1>header</h1>
		</header>
	);
};
