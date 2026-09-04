import { OptionBtn } from '@/components/OptionBtn';
import { SubmitBtn } from '@/components/SubmitBtn';
import { ThemeBtn } from '@/components/ThemeBtn';
import errorIcon from '@/assets/images/icon-error.svg';
import { quizzes, type QuizCategory } from '@/data';
import quizData from '@/data/data.json';
import { useState } from 'react';

interface QuestionPageProps {
	category: QuizCategory;
}

export const QuestionPage = ({ category }: QuestionPageProps) => {
	const quiz = quizzes[category];
	const quizQuestions = quizData.quizzes.find(q => q.title === category)?.questions;

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
	const [showError, setShowError] = useState<boolean>(false);

	if (!quizQuestions || quizQuestions.length === 0) {
		return <p className='text-red-500'>No questions found for this quiz.</p>;
	}

	const currentQuestion = quizQuestions[currentQuestionIndex];
	const progressPercentage = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

	const handleOptionSelect = (optionIndex: number) => {
		setSelectedOptionIndex(currentIndex => (currentIndex === optionIndex ? null : optionIndex));
	};

	console.log(currentQuestion);
	console.log(selectedOptionIndex);

	const isAnswerCorrect = () => {
		if (selectedOptionIndex === null) {
			setShowError(true);
			return;
		} else {
			setShowError(false);
		}

		if (currentQuestion.answer === currentQuestion.options[selectedOptionIndex]) {
			console.log('Correct answer!');
		}
		// Finish this logic
	};

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
						Question <span>{currentQuestionIndex + 1}</span> of <span>{quizQuestions.length}</span>
					</p>

					<h2 className='mt-4 mb-6 text-preset3-mobile text-blue-900 dark:text-white md:text-preset3 md:mt-6 md:mb-10 xl:mb-46'>{currentQuestion.question}</h2>

					<div className='w-full p-1 rounded-full bg-white dark:bg-blue-850'>
						<div className='h-2 rounded-full bg-purple-600' style={{ width: `${progressPercentage}%` }}></div>
					</div>
				</div>

				<div className='xl:min-w-141'>
					<ol className='flex flex-col gap-4 md:gap-6'>
						{currentQuestion.options.map((option, optionIndex) => (
							<OptionBtn key={option} option={option} optionIndex={optionIndex} handleOptionSelect={handleOptionSelect} isSelected={selectedOptionIndex === optionIndex} />
						))}
					</ol>

					<SubmitBtn isAnswerCorrect={isAnswerCorrect} />

					<div className={`${showError ? 'flex' : 'hidden'} items-center justify-center gap-2 mt-4 md:mt-8`}>
						<img src={errorIcon} alt='icon image representing an error' className='h-8 w-8' />
						<p className='text-red-500 text-preset4-mobile dark:text-white md:text-preset5-regular'>Please select an answer</p>
					</div>
				</div>
			</div>
		</section>
	);
};
