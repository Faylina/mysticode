'use strict';

import { domElements } from './dom.js';
import { loadSpells } from './ajax.js';
import { renderSpell } from './render.js';
import { setInvisible } from './setInvisible.js';

const showSpell = (_id, _rev) => {

    setInvisible(domElements.intro);
    setInvisible(domElements.spells);
    setInvisible(domElements.search);
    setInvisible(domElements.filter);
    setInvisible(domElements.register);
    setInvisible(domElements.login);
    setInvisible(domElements.add);

    domElements.spell.classList.remove('invisible');

    const extractSpell = (spells) => {
        const spell = spells.find((value) => {
        return value._id === _id && value._rev === _rev;
        });
        return spell;
        }

        loadSpells()
        .then(response => {
            const spell = extractSpell(response.data.data);
            renderSpell(spell);
        })
        .catch(console.warn);

}

export { showSpell }; 