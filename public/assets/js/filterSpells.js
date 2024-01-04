'use strict';

import { domElements, mapDOM, create, sel, selAll } from './dom.js';
import { renderFilter } from './renderFunctions.js';
import { setInvisible } from './setInvisible.js';
import { loadSpells } from './ajax.js';
import { renderPreview } from './render.js';

mapDOM();

const filterSpells = () => {
    
    setInvisible(domElements.intro);
    setInvisible(domElements.spell);
    setInvisible(domElements.add);
    setInvisible(domElements.search);
    setInvisible(domElements.register);
    setInvisible(domElements.login);
    setInvisible(domElements.spells);

    domElements.filter.classList.remove('invisible');

    renderFilter();

}

const filterElements = (event) => {
    
    const input = event.target.value;

    const compareSpells = (spells) => {
        const filterResults = spells.filter((value) => {
            if (value.element.includes(input)) {
                return value
            }
        })
        return filterResults;
    }

    loadSpells()
    .then(response => {
        return compareSpells(response.data.data);
    })
    .then(filterResults => {
        renderPreview(filterResults, '.filterResults')
    })
    .catch(console.warn)
}

export { filterSpells, filterElements }; 