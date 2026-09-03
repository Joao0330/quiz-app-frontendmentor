import { OptionBtn } from '@/components/OptionBtn';
import { SubmitBtn } from '@/components/SubmitBtn';
import { ThemeBtn } from '@/components/ThemeBtn';
import errorIcon from '@/assets/images/icon-error.svg';
import { quizzes, type QuizCategory } from '@/data';
import quizData from '@/data/data.json';

interface QuestionPageProps {
	category: QuizCategory;
}

export const QuestionPage = ({ category }: QuestionPageProps) => {
	const quiz = quizzes[category];
	const quizQuestions = quizData.quizzes.find(q => q.title === category)?.questions;

	console.log(quizQuestions);

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

			<div className='pt-8 pb-21.75 flex flex-col gap-10 md:pt-0 xl:flex-row xl:items-start xl:gap-32'>
				<div className='xl:min-w-116.25'>
					<p className='text-preset5-mobile text-grey-500 dark:text-blue-300 md:text-preset6'>
						Question <span>6</span> of <span>10</span>
					</p>

					<h2 className='mt-4 mb-6 text-preset3-mobile text-blue-900 dark:text-white md:text-preset3 md:mt-6 md:mb-10 xl:mb-46'>
						Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?
					</h2>

					<div className='p-1 rounded-full bg-white dark:bg-blue-850'>
						<div className='h-2 rounded-full bg-purple-600 w-[60%]'></div>
					</div>
				</div>

				<div className='xl:min-w-141'>
					<ol className='flex flex-col gap-4 md:gap-6'>
						<OptionBtn />
						<OptionBtn />
						<OptionBtn />
						<OptionBtn />
					</ol>

					<SubmitBtn />

					<div className='hidden items-center justify-center gap-2 mt-4 md:mt-8'>
						<img src={errorIcon} alt='icon image representing an error' className='h-8 w-8' />
						<p className='text-red-500 text-preset4-mobile dark:text-white md:text-preset5-regular'>Please select an answer</p>
					</div>
				</div>
			</div>
		</section>
	);
};
