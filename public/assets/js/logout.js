'use strict';

import { domElements, mapDOM, create, sel, selAll } from './dom.js';
import { listSpells } from './listSpells.js';

const logout = () => {
    domElements.greeting.classList.add('invisible');
    domElements.dear.innerHTML = `Dear Witch,`;
    localStorage.removeItem('name');
    listSpells();
}

export { logout };