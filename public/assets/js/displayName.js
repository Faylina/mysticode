'use strict';

import { domElements } from './dom.js';

const displayName = () => {
    const name = localStorage.getItem('name');
    domElements.nameUser.innerHTML = '';
    domElements.nameUser.innerHTML = `This grimoire belongs to: ${name}`;
    domElements.dear.innerHTML = `Dear ${name},`;
    domElements.greeting.classList.remove('invisible');
}

export { displayName };