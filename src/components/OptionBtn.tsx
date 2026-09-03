import correctIcon from '../assets/images/icon-correct.svg';
import incorrectIcon from '../assets/images/icon-incorrect.svg';

export const OptionBtn = () => {
	return (
		<li>
			<button type='button' className='optionBtn'>
				<div>
					<span>A</span>
					<strong>4.5:1</strong>
				</div>

				<img src={correctIcon} alt='correct icon image' className='hidden' />
				<img src={incorrectIcon} alt='correct icon image' className='hidden' />
			</button>
		</li>
	);
};
