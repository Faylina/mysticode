'use strict';

import { domElements, mapDOM, create, sel, selAll } from './dom.js';
import { setInvisible } from './setInvisible.js';
import { renderLogin } from './renderFunctions.js';

mapDOM();

const loginUser = (event) => {

    setInvisible(domElements.intro);
    setInvisible(domElements.spell);
    setInvisible(domElements.search);
    setInvisible(domElements.filter);
    setInvisible(domElements.register);
    setInvisible(domElements.spells);
    setInvisible(domElements.add);

    domElements.login.classList.remove('invisible');

    renderLogin();
}

export { loginUser }; 