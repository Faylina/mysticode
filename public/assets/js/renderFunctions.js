'use strict';

import { create, sel, selAll } from './dom.js'; 
import { goRegister, logIntoAccount } from './loginFunctions.js';
import { loginUser } from './loginUser.js';
import { createAccount } from './registerFunctions.js';

const renderFunctions = {

    renderLogin () {
        const login = sel('.login');

        login.innerHTML = '';

        const container = create({
            classes: ['loginContainer'],
            parent: login
        }); 

        const heading = create({
            type: 'h2',
            classes: ['loginHeading'],
            parent: container,
            content: 'Log Into Your Account'
        });

        const form = create({
            type: 'form',
            parent: container,
            attribute: {
                id: 'loginForm'
            },
            listener: {
                submit(){
                    logIntoAccount();
                }
            }
        }); 

        const emailContainer = create({
            classes: ['emailContainer'],
            parent: form
        }); 

        const emailLabel = create({
            type: 'label',
            classes: ['emailLabel'],
            parent: emailContainer,
            content: 'Email: ',
            attribute: {
                for: 'loginEmail'
            }
        });

        const email = create ({
            type: 'input',
            parent: emailContainer,
            attribute: {
                type: 'text',
                id: 'loginEmail',
                name: 'loginEmail'
            }
        });

        const passwordContainer = create({
            classes: ['passwordContainer'],
            parent: form
        }); 

        const passwordLabel = create({
            type: 'label',
            classes: ['passwordLabel'],
            parent: passwordContainer,
            content: 'Password: ',
            attribute: {
                for: 'loginPassword'
            }
        });

        const password = create ({
            type: 'input',
            parent: passwordContainer,
            attribute: {
                type: 'password',
                id: 'loginPassword',
                name: 'loginPassword'
            }
        });

        const loginButton = create ({
            type: 'button',
            classes: ['loginButton'],
            parent: form,
            content: 'Login'
        });

        const register = create ({
            classes: ['registerLink'],
            parent: container,
            content: 'Create Account',
            listeners: {
                click(){
                    goRegister();
                }
            }
        });
    },

    renderRegister() {

        const reg = sel('.register');

        reg.innerHTML = '';

        const container = create({
            classes: ['loginContainer'],
            parent: reg
        }); 

        const heading = create({
            type: 'h2',
            classes: ['loginHeading'],
            parent: container,
            content: 'Create an Account'
        });

        const form = create({
            type: 'form',
            parent: container,
            attribute: {
                id: 'registerForm'
            },
            listeners: {
                submit(event){
                    createAccount(event);
                }
            }
        }); 

        const firstNameContainer = create({
            classes: ['firstNameContainer'],
            parent: form
        }); 

        const firstNameLabel = create({
            type: 'label',
            classes: ['firstNameLabel'],
            parent: firstNameContainer,
            content: 'First Name: ',
            attribute: {
                for: 'firstName'
            }
        });

        const firstName = create ({
            type: 'input',
            parent: firstNameContainer,
            attribute: {
                type: 'text',
                id: 'firstName',
                name: 'firstName'
            }
        });

        const lastNameContainer = create({
            classes: ['lastNameContainer'],
            parent: form
        }); 

        const lastNameLabel = create({
            type: 'label',
            classes: ['lastNameLabel'],
            parent: lastNameContainer,
            content: 'Last Name: ',
            attribute: {
                for: 'lastName'
            }
        });

        const lastName = create ({
            type: 'input',
            parent: lastNameContainer,
            attribute: {
                type: 'text',
                id: 'lastName',
                name: 'lastName'
            }
        });

        const emailContainer = create({
            classes: ['emailContainer'],
            parent: form
        }); 

        const emailLabel = create({
            type: 'label',
            classes: ['emailLabel'],
            parent: emailContainer,
            content: 'Email: ',
            attribute: {
                for: 'registerEmail'
            }
        });

        const email = create ({
            type: 'input',
            parent: emailContainer,
            attribute: {
                type: 'email',
                id: 'registerEmail',
                name: 'registerEmail'
            }
        });

        const passwordContainer = create({
            classes: ['passwordContainer'],
            parent: form
        }); 

        const passwordLabel = create({
            type: 'label',
            classes: ['passwordLabel'],
            parent: passwordContainer,
            content: 'Password: ',
            attribute: {
                for: 'registerPassword'
            }
        });

        const password = create ({
            type: 'input',
            parent: passwordContainer,
            attribute: {
                type: 'password',
                id: 'registerPassword',
                name: 'registerPassword'
            }
        });

        const registerButton = create ({
            type: 'button',
            classes: ['registerButton'],
            parent: form,
            content: 'Create a new account'
        });

        const register = create ({
            classes: ['loginLink'],
            parent: container,
            content: 'Back To Login',
            listeners: {
                click(){
                    loginUser();
                }
            }
        });

    },

    renderFilter() {

    },

    renderSearch() {

    },

    renderAddSpell() {

    }
}

const renderLogin = renderFunctions.renderLogin;
const renderRegister = renderFunctions.renderRegister;
const renderFilter = renderFunctions.renderFilter;
const renderSearch = renderFunctions.renderSearch;
const renderAddSpell = renderFunctions.renderAddSpell;

export { renderLogin, renderRegister, renderFilter, renderSearch, renderAddSpell };