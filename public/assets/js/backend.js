'use strict';

import { createEventListener } from './eventsBackend.js';
import { mapDOM } from './dom.js';
import { loadSpells, deleteSpells } from './ajax.js';
import { renderAllSpells, renderSpell, renderPreview } from './render.js';


const init = () => {
    mapDOM();
    createEventListener(); 
    loadSpells()
    .then(response => {
        renderAllSpells(response.data.data)
    })
    .catch(console.warn)
}

init();