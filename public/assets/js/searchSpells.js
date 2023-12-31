'use strict';

import { domElements, mapDOM } from './dom.js';
import { setInvisible } from './setInvisible.js';
import { renderSearch } from './renderFunctions.js';
import { loadSpells } from './ajax.js';
import { renderPreview } from './render.js';

mapDOM();

const searchSpells = () => {

    setInvisible(domElements.intro);
    setInvisible(domElements.spell);
    setInvisible(domElements.add);
    setInvisible(domElements.filter);
    setInvisible(domElements.register);
    setInvisible(domElements.login);
    setInvisible(domElements.spells);

    domElements.search.classList.remove('invisible');

    renderSearch();

}

const searchSpell = (event) => {

    const input = (event.target.value).toLowerCase();

    const compareSpells = (spells) => {
        const searchResults = spells.filter((value) => {
            
            const spell = (value.name).toLowerCase();
    
            if (spell.includes(input)) {
                return value
            }
        })
        return searchResults;
    }

    loadSpells()
    .then(response => {
        return compareSpells(response.data.data);
    })
    .then(searchResults => {
        renderPreview(searchResults, '.searchResultsContainer')
    })
    .catch(console.warn)
}

export { searchSpells, searchSpell }; 