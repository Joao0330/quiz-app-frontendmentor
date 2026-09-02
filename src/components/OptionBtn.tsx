export const OptionBtn = () => {
	return (
		<li>
			<button type='button' className='w-full flex items-center gap-4 bg-white rounded-xl p-4 boxShadowLight cursor-pointer dark:boxShadowDark dark:bg-blue-850 md:gap-8 md:rounded-3xl xl:p-6'>
				<span className='flex items-center justify-center h-10 w-10 rounded-md bg-grey-50 text-grey-500 text-preset4-mobile md:h-14 md:w-14 md:rounded-xl md:text-preset4'>A</span>
				<strong className='text-preset4-mobile text-blue-900 md:text-preset4'>4.5:1</strong>
			</button>
		</li>
	);
};
