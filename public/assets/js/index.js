'use strict';

import { mapDOM } from './dom.js';
import { createEventListener } from './eventsFrontend.js';


const init = () => {
    mapDOM();
    createEventListener(); 
}

init();