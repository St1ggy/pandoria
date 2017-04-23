import React from 'react';
import classnames from 'classnames';

const Hex = ({hex}) => {
	// console.log(hex);
	return (
		<span className={classnames('hex', 'tile', hex.offset, 'type'+hex.type)}></span>
	);
};

export default Hex;
