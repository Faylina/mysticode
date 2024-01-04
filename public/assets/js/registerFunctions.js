'use strict';

import { domElements, mapDOM, sel } from './dom.js';
import { displayName } from './displayName.js';
import { listSpells } from './listSpells.js';

mapDOM();

const logNewAccount = (event) => {
    const name = event.target[0].value;
    localStorage.setItem('name', name);
    displayName();
}

const createAccount = (event) => {
    event.preventDefault();

    const registerForm = sel('#registerForm');

    const user = new FormData(registerForm);

    fetch('/saveNewUser', {
        method: 'post', 
        body: user
    }).then(
        console.log('Import successful')
    ).catch(
        console.warn
    )

    logNewAccount(event);

    listSpells();
}

export { createAccount };