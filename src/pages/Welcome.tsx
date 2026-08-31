import { Link } from 'react-router';
import htmlIcon from '../assets/images/icon-html.svg';
import cssIcon from '../assets/images/icon-css.svg';
import jsIcon from '../assets/images/icon-js.svg';
import accessibilityIcon from '../assets/images/icon-accessibility.svg';

export const Welcome = () => {
	return (
		<section className='flex flex-col gap-10 pt-8 px-6'>
			<div>
				<h1 className='text-preset2-light-mobile text-blue-900 mb-4'>
					Welcome to the <span className='text-preset2-medium-mobile'>Frontend Quiz</span>
				</h1>
				<p className='text-preset5-mobile text-grey-500'>Pick a subject to get started.</p>
			</div>

			<nav>
				<ul className='flex flex-col gap-4'>
					<li>
						<Link to='/html' className='flex items-center gap-4 p-4 bg-white rounded-xl boxShadowBlue'>
							<span className='bg-orange-50 h-10 w-10 p-[0.357rem]'>
								<img src={htmlIcon} alt='html icon image' />
							</span>
							<strong className='text-preset4-mobile text-blue-900'>HTML</strong>
						</Link>
					</li>
					<li>
						<Link to='/css'>
							<span>
								<img src={cssIcon} alt='CSS icon image' />
							</span>
							<strong>CSS</strong>
						</Link>
					</li>
					<li>
						<Link to='/javascript'>
							<span>
								<img src={jsIcon} alt='javascript icon image' />
							</span>
							<strong>Javascript</strong>
						</Link>
					</li>
					<li>
						<Link to='/html'>
							<span>
								<img src={accessibilityIcon} alt='accessibility icon image' />
							</span>
							<strong>Accessibility</strong>
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
};
