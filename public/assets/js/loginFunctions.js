'use strict';

import { domElements } from './dom.js';
import { setInvisible } from './setInvisible.js';
import { renderRegister } from './renderFunctions.js';
import { loadUsers } from './ajax.js';
import { listSpells } from './listSpells.js';
import { displayName } from './displayName.js';

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

    logIntoAccount(event) {
        event.preventDefault();

        const email = event.target[0].value;
        const password = event.target[1].value;

        const compareData = (database) => {

            let match = false;
            let name;

            database.forEach((value) => {
                
                if (email === value.registerEmail && password === value.registerPassword) {
                    match = true;
                    name = value.firstName;
                } 
            });

            if(match === false) {
                alert('No account was found. Please create a new account.');
            } else if (localStorage.getItem('name')) {
                alert('You are already logged in! :)');
            } else {
                localStorage.setItem('name', name);
            } 
            
        }

        if (email.length == 0 || password.length == 0) {
            alert('Missing email address or password');
        } else {
            loadUsers()
            .then(response => {
                    compareData(response.data.data)
            })
            .then(() => {
                if (localStorage.getItem('name')) {
                    displayName();
                }
            })
            .then(() => {
                if (localStorage.getItem('name')) {
                    listSpells();
                }
            })
            .catch(console.warn)
        }

    }
}

const goRegister = loginFunctions.goRegister;
const logIntoAccount = loginFunctions.logIntoAccount;

export { goRegister, logIntoAccount };