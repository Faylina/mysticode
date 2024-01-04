'use strict';

import { domElements, mapDOM, sel } from './dom.js';
import { loginUser } from './loginUser.js';

mapDOM();

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

    loginUser();
}

export { createAccount };