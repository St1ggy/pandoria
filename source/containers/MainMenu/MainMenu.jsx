import React from 'react';
import { Link } from 'react-router';

let mainMenuDictionary = [
	{route: '/', title: 'Вернуться к карте'},
	// {route: '/wiki', title: 'Мини-wiki по Пандории'},
	// {route: '/chargen', title: 'Генератор персонажа'}
];

const MainMenu = () => {
	let menuConstructor = mainMenuDictionary.map(
		(item, index) => {
			return <li key={index}><Link to={item.route}>{item.title}</Link></li>;
		}
	);
    return (
        <ul>
			{menuConstructor}
        </ul>
    );
};

export default MainMenu;
