import React from 'react';
import classnames from 'classnames';
import types from '../types.json'

const Hex = ({hex}) => {
	// console.log(hex);
	return (
		<span className={classnames('hex', 'tile', hex.offset, 'type-'+types[hex.type])}></span>
	);
};

export default Hex;
