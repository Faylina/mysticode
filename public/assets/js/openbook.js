'use strict'; 

import { domElements } from './dom.js';

const openBook = () => {
    domElements.cover.classList.add('opencover');
    domElements.cover.classList.remove('pointer');
    domElements.book.classList.add('movebook');
}

export { openBook };