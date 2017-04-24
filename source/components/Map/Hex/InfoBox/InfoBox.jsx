import React from 'react';
import types from '../../types.json';

const InfoBox = ({info}) => {
	console.log(info);
	return <span>({info.x}, {info.y}) : {types[info.type]}</span>;
}

export default InfoBox;
