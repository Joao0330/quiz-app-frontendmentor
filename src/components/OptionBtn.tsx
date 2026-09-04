import correctIcon from '../assets/images/icon-correct.svg';
import incorrectIcon from '../assets/images/icon-incorrect.svg';

interface OptionBtnProps {
	option: string;
	optionIndex: number;
	handleOptionSelect: (optionIndex: number) => void;
	isSelected: boolean;
}

export const OptionBtn = ({ option, optionIndex, handleOptionSelect, isSelected }: OptionBtnProps) => {
	const questionLetters = ['A', 'B', 'C', 'D'];

	return (
		<li>
			<button type='button' className={`optionBtn${isSelected ? ' active' : ''} `} onClick={() => handleOptionSelect(optionIndex)}>
				<div>
					<span>{questionLetters[optionIndex]}</span>
					<strong>{option}</strong>
				</div>

				<img src={correctIcon} alt='correct icon image' className={`hidden`} />
				<img src={incorrectIcon} alt='incorrect icon image' className='hidden' />
			</button>
		</li>
	);
};
