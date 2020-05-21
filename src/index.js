import Cat from './cat';
import _ from 'lodash';
import './style.scss';

function init() {
	const element = document.createElement('h1');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	element.classList.add('handler');

	return element;
}

document.body.appendChild(init());

let cleopatra = new Cat('Cleopatra');
console.log(cleopatra.myName());
