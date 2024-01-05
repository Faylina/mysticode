'use strict';

import { domElements } from './dom.js';
import { loadSpells } from './ajax.js';
import { renderPreview} from './render.js';
import { setInvisible } from './setInvisible.js';

const listSpells = () => {

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
        renderPreview(response.data.data, '.spells')
    })
    .catch(console.warn)

}

export { listSpells }; 