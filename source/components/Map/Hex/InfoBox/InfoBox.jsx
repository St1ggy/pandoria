import React from 'react';
import types from '../../types.json';

const InfoBox = ({info}) => {
	console.log(info);
	return <span className="info-box">({info.x}, {info.y})<br/>{types[info.type]}</span>;
}

export default InfoBox;
