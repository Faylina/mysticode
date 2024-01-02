'use strict';

import { domElements } from './dom.js';
import { submitdata } from './submitdata.js';

const createEventListener = () => {
    domElements.form.addEventListener('submit', submitdata); 
}

export { createEventListener };