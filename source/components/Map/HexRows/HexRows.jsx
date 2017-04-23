import React from 'react';
import Hex from '../Hex/Hex';

let hexRows = [];

const HexRows = ({hexes}) => {
	// console.log(hexes);
	for (let hex of hexes) {
		// console.log(hex);
		if (!hexRows[hex.y]) {
			hexRows[hex.y] = [];
		}
		hex.offset = hex.y%2 ? 'odd' : 'even';
		hexRows[hex.y][hex.x] = hex;
	}
	console.log(hexRows);
	hexRows = hexRows.map((hexArray, index) => {
		console.log(hexArray);
		let hexRow = hexArray.map((hex, index) => {
			return <Hex key={index} hex={hex} />;
		});
		return (
			<div key={index}>{hexRow}</div>
		);
	});
	return (
		<div>
			{hexRows}
		</div>
	);
};

export default HexRows;
