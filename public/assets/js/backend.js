'use strict';

import { createEventListener } from './eventsBackend.js';
import { mapDOM } from './dom.js';


const init = () => {
    mapDOM();
    createEventListener(); 
}

init();