import { ThemeBtn } from '@/components/ThemeBtn';
import { quizzes, type QuizCategory } from '@/data';
import { Link, useLocation } from 'react-router';

export const ScorePage = () => {
	const { state } = useLocation();
	const category: QuizCategory = state.category;
	const correctAnswersCount: number = state.correctAnswersCount;
	const totalQuestions: number = state.totalQuestions;

	const quiz = quizzes[category];

	return (
		<section className='min-h-screen px-6 md:px-16 xl:px-0 xl:pr-35.75 xl:pl-35'>
			<header className='flex justify-between py-4 md:py-0 md:pt-10 md:mb-12.25 xl:pt-20.75 xl:mb-21.25'>
				<div className='flex items-center gap-4 md:gap-6'>
					<span className={`${quiz.bgColor} h-10 w-10 p-[0.357rem] rounded-md md:p-2 md:h-14 md:w-14 md:rounded-xl`}>
						<img src={quiz.icon} alt={quiz.alt} />
					</span>

					<h1 className='text-preset4-mobile text-blue-900 dark:text-white md:text-preset4'>{category}</h1>
				</div>

				<ThemeBtn />
			</header>

			<div className='pt-8 pb-21.75 flex flex-col gap-10 md:pt-0 xl:flex-row xl:items-start xl:justify-between xl:gap-36'>
				<h2 className='text-preset2-light-mobile text-blue-900 mb-10 dark:text-white md:text-preset2-light md:mb-16 md:flex md:flex-col xl:min-w-112.5'>
					Quiz completed <span className='text-preset2-medium-mobile md:text-preset2-medium'>You scored...</span>
				</h2>

				<div className='xl:min-w-141'>
					<div className='p-8 flex flex-col items-center gap-4 bg-white boxShadowLight rounded-xl dark:bg-blue-850 dark:boxShadowDark md:p-12 md:gap-0 md:rounded-3xl'>
						<div className='flex items-center gap-4 md:gap-6'>
							<span className={`${quiz.bgColor} h-10 w-10 p-[0.357rem] rounded-md md:p-2 md:h-14 md:w-14 md:rounded-xl`}>
								<img src={quiz.icon} alt={quiz.alt} />
							</span>

							<h3 className='text-preset4-mobile text-blue-900 dark:text-white md:text-preset4'>{category}</h3>
						</div>

						<strong className='text-preset1-mobile text-blue-900 dark:text-white md:text-preset1 md:mt-10 md:mb-4'>{correctAnswersCount}</strong>

						<p className='text-preset4-mobile text-grey-500 dark:text-blue-300 md:text-preset5-medium'>out of {totalQuestions}</p>
					</div>
					<Link
						to='/'
						className='block mt-4 p-4 text-white text-center text-preset4-mobile rounded-xl bg-purple-600 w-full boxShadowLight dark:boxShadowDark md:p-8 md:rounded-3xl md:text-preset4 md:mt-8'
					>
						Play Again
					</Link>
				</div>
			</div>
		</section>
	);
};
