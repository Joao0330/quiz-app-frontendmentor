import { quizzes, type QuizCategory } from '@/data';

interface QuestionPageProps {
	category: QuizCategory;
}

export const QuestionPage = ({ category }: QuestionPageProps) => {
	const quiz = quizzes[category];

	return (
		<section className='min-h-screen'>
			<header>
				<div>
					<span>
						<img src={quiz.icon} alt={quiz.alt} />
					</span>

					<h1>{category}</h1>
				</div>
			</header>
		</section>
	);
};
