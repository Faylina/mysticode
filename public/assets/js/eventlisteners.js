'use strict'

import { domElements } from './dom.js';
import { openBook, closeBook } from './handlebook.js';

const createEventListener = () => {
    domElements.cover.addEventListener('click', openBook); 
    domElements.closeBook.addEventListener('click', closeBook); 
}

export { createEventListener };