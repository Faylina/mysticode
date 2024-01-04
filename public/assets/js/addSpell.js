'use strict';

import { domElements, mapDOM, create, sel, selAll } from './dom.js';
import { loginUser} from './loginUser.js';
import { setInvisible } from './setInvisible.js';
import { renderAddSpell } from './renderFunctions.js';

mapDOM();

const addSpell = (event) => {

    const name = localStorage.getItem('name');
    
    if (!name) {
        loginUser();
    } else {
        setInvisible(domElements.intro);
        setInvisible(domElements.spell);
        setInvisible(domElements.search);
        setInvisible(domElements.filter);
        setInvisible(domElements.register);
        setInvisible(domElements.login);
        setInvisible(domElements.spells);

        domElements.add.classList.remove('invisible');

        renderAddSpell();
    }
}

export { addSpell }; 