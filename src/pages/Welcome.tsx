import { Link } from 'react-router';
import { quizzes } from '@/data';
import { ThemeBtn } from '@/components/ThemeBtn';

export const Welcome = () => {
	return (
		<section className='min-h-screen pb-51.75 px-6 md:px-16 md:pb-56.25 xl:pb-68 xl:pr-35.75 xl:pl-35'>
			<header className='flex justify-end py-4 md:py-13.5 xl:py-0 xl:pt-24.25 xl:pb-24.75'>
				<ThemeBtn />
			</header>

			<div className='flex flex-col gap-10 pt-8 md:pt-0 md:gap-16 xl:flex-row xl:items-start xl:gap-32'>
				<div className='xl:w-1/2'>
					<h1 className='text-preset2-light-mobile text-blue-900 mb-4 dark:text-white md:text-preset2-light xl:mb-12'>
						Welcome to the <span className='text-preset2-medium-mobile md:text-preset2-medium'>Frontend Quiz!</span>
					</h1>
					<p className='text-preset5-mobile text-grey-500 dark:text-blue-300 md:text-preset6'>Pick a subject to get started.</p>
				</div>

				<nav className='xl:w-1/2'>
					<ul className='flex flex-col gap-4 md:gap-6 xl:gap-4'>
						{Object.entries(quizzes).map(([category, quiz]) => (
							<li key={category}>
								<Link
									to={quiz.url}
									className='flex items-center gap-4 p-4 bg-white rounded-xl boxShadowLight dark:boxShadowDark dark:bg-blue-850 md:gap-8 xl:transition-transform xl:hover:duration-300 xl:hover:scale-105'
								>
									<span className={`${quiz.bgColor} h-10 w-10 p-[0.357rem] rounded-md md:p-2 md:h-14 md:w-14 md:rounded-xl`}>
										<img src={quiz.icon} alt={quiz.alt} />
									</span>

									<strong className='text-preset4-mobile text-blue-900 dark:text-white md:text-preset4'>{category}</strong>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</section>
	);
};
