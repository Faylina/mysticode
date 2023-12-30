'use strict'; 

import { domElements } from './dom.js';

const openBook = () => {
    domElements.cover.classList.toggle('opencover');
    domElements.book.classList.toggle('movebook');
}

export { openBook };