'use strict';

import { domElements, mapDOM, create, sel, selAll } from './dom.js';
import { createEventListener } from './eventsFrontend.js';


const init = () => {
    mapDOM();
    createEventListener(); 
}

init();