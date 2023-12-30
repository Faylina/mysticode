'use strict'; 

import { domElements } from './dom.js';

const openBook = () => {
    domElements.cover.classList.add('opencover');
    domElements.cover.classList.remove('pointer');
    domElements.book.classList.add('movebook');
    domElements.cover.removeEventListener('click', openBook);
}

const closeBook = (event) => {
    event.stopPropagation();
    domElements.cover.classList.remove('opencover');
    domElements.cover.classList.add('pointer');
    domElements.book.classList.remove('movebook');
    domElements.cover.addEventListener('click', openBook);
}

export { openBook, closeBook };