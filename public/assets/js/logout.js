'use strict';

import { domElements } from './dom.js';
import { listSpells } from './listSpells.js';

const logout = () => {
    alert("You've been logged out.");
    domElements.greeting.classList.add('invisible');
    domElements.dear.innerHTML = `Dear Witch,`;
    localStorage.removeItem('name');
    listSpells();
}

export { logout };