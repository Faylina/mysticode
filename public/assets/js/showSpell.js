'use strict';

import { domElements, mapDOM, create, sel, selAll } from './dom.js';
import { loadSpells, deleteSpells, deleteAndReload, reload} from './ajax.js';
import { renderSpell} from './render.js';

const showSpell = (_id, _rev) => {

    domElements.spells.classList.add('invisible');
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
            //const spellArray = Object.values(spell);
            console.log(spell);
            renderSpell(spell);
        })
        .catch(console.warn);

}

export { showSpell }; 