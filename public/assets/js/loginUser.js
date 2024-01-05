'use strict';

import { domElements, mapDOM } from './dom.js';
import { setInvisible } from './setInvisible.js';
import { renderLogin } from './renderFunctions.js';

mapDOM();

const loginUser = () => {

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