import React from 'react';
import InfoBox from './InfoBox/InfoBox';
import classnames from 'classnames';
import types from '../hexTypes.json'

const Hex = ({hex}) => {
	// console.log(hex);
	return (
		<span className={classnames('clickable', 'hex', 'tile', hex.offset, 'type-'+types[hex.type])}>
			<InfoBox info={hex} />
		</span>
	);
};

export default Hex;
