'use strict'

import { domElements, mapDOM, create, sel, selAll } from './dom.js';
import { openBook, closeBook } from './handlebook.js';
import { listSpells } from './listSpells.js'; 
import { searchSpells } from './searchSpells.js'; 
import { filterSpells } from './filterSpells.js'; 
import { loginUser } from './loginUser.js'; 
import { addSpell } from './addSpell.js'; 
import { createAccount } from './registerFunctions.js';
import { logout } from './logout.js';

mapDOM();

const createEventListener = () => {
    domElements.cover.addEventListener('click', openBook); 
    domElements.closeBook.addEventListener('click', closeBook); 
    domElements.listSpells.addEventListener('click', listSpells); 
    domElements.searchSpells.addEventListener('click', searchSpells); 
    domElements.filterSpells.addEventListener('click', filterSpells);   
    domElements.loginUser.addEventListener('click', loginUser); 
    domElements.addSpell.addEventListener('click', addSpell); 
    domElements.logout.addEventListener('click', logout); 
}

export { createEventListener };