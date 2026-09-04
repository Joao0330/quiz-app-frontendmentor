interface OptionBtnProps {
	isAnswerCorrect: () => void;
}

export const SubmitBtn = ({ isAnswerCorrect }: OptionBtnProps) => {
	return (
		<button
			onClick={isAnswerCorrect}
			type='button'
			className='relative w-full mt-4 p-4 rounded-xl bg-purple-600 boxShadowLight dark:boxShadowDark text-preset4-mobile text-white cursor-pointer md:mt-8 md:p-8 md:rounded-3xl md:text-preset4 xl:hover:after:content-[""] xl:hover:after:absolute xl:hover:after:inset-0 xl:hover:after:bg-[rgba(255,255,255,0.50)] xl:hover:after:rounded-3xl'
		>
			Submit Answer
		</button>
	);
};
