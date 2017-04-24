import React from 'react';
import HexRows from './HexRows/HexRows';
import tiles from './hexes.json';
// import * as firebase from 'firebase';
//
// const config = {
// 	databaseURL: "https://pandoriamap.firebaseio.com/"
// }
// const fb = firebase
// 	.initializeApp(config)
// 	.database()
// 	.ref()

const Map = (props) => {
	return (
		<div className='container'>
			<HexRows hexes={tiles.hexes}/>
		</div>
	);
};

export default Map;
