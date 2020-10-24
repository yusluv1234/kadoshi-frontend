import React from 'react';
import './buttonSmall.scss';

export const ButtonSmall = ({ clicked, caption, roundEdge, light, plain }) => {
	return (
		<button
			className={`btn__small ${roundEdge && '_smallround'} ${light && '_smalllight'} ${
				plain && '_smallplain'
			}`}
		>
			Hire Now
		</button>
	);
};

export default ButtonSmall;
