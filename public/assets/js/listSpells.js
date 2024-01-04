'use strict';

import { domElements, mapDOM, create, sel, selAll } from './dom.js';
import { loadSpells, deleteSpells, deleteAndReload, reload} from './ajax.js';
import { renderPreview} from './render.js';
import { setInvisible } from './setInvisible.js';

const listSpells = (event) => {
    event.stopPropagation();

    setInvisible(domElements.intro);
    setInvisible(domElements.spell);
    setInvisible(domElements.search);
    setInvisible(domElements.filter);
    setInvisible(domElements.register);
    setInvisible(domElements.login);
    setInvisible(domElements.add);

    domElements.spells.classList.remove('invisible');

    loadSpells()
    .then(response => {
        renderPreview(response.data.data)
    })
    .catch(console.warn)

}

export { listSpells }; 