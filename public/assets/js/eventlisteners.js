'use strict'

import { domElements } from './dom.js';
import { openBook } from './openbook.js';

const createEventListener = () => {
    domElements.cover.addEventListener('click', openBook); 
}

export { createEventListener };