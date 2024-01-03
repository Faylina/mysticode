'use strict';

import { domElements, mapDOM, create, sel, selAll } from './dom.js';
import { setInvisible } from './targetElement.js';
import { renderRegister } from './renderFunctions.js';

const loginFunctions = {
    goRegister() {

        setInvisible(domElements.intro);
        setInvisible(domElements.spell);
        setInvisible(domElements.search);
        setInvisible(domElements.filter);
        setInvisible(domElements.login);
        setInvisible(domElements.spells);
        setInvisible(domElements.add);

        domElements.register.classList.remove('invisible');

        renderRegister();
    },

    logIntoAccount() {

    }
}

const goRegister = loginFunctions.goRegister;
const logIntoAccount = loginFunctions.logIntoAccount;

export { goRegister, logIntoAccount };