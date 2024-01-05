'use strict';

import { mapDOM, sel } from './dom.js';
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

    const firstName = document.querySelector('#firstName').value.length;
    const lastName = document.querySelector('#lastName').value.length;
    const email = document.querySelector('#registerEmail').value.length;
    const password = document.querySelector('#registerPassword').value.length;

    if ((firstName == 0) || (lastName == 0) || (email == 0) || (password
         == 0)) {

        alert('Please fill out every field.');

    } else {

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
}

export { createAccount };