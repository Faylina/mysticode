'use strict';

import { domElements, mapDOM, create, sel, selAll } from './dom.js';
import { loadSpells, deleteSpells, deleteAndReload, reload} from './ajax.js';
import { renderPreview} from './render.js';

mapDOM();


const listSpells = (event) => {
    event.stopPropagation();

    domElements.intro.classList.add('invisible');
    domElements.spells.classList.remove('invisible');

    loadSpells()
    .then(response => {
        renderPreview(response.data.data)
    })
    .catch(console.warn)

}

export { listSpells }; 