import React from 'react';
import types from '../../hexTypes.json';

const InfoBox = ({info}) => {
	if(info.type == 0) {
		return <span className="info-box"></span>;
	} else {
		return <span className="info-box">[{info.x}:{info.y}]<br/>{types[info.type]}</span>;
	}
}

export default InfoBox;
