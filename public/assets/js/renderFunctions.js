'use strict';

import { domElements, mapDOM, create, sel, selAll } from './dom.js'; 
import { goRegister, logIntoAccount } from './loginFunctions.js';
import { loginUser } from './loginUser.js';
import { createAccount } from './registerFunctions.js';
import { submitUserSpell } from './submitdata.js';
import { searchSpell } from './searchSpells.js';
import { filterElements } from './filterSpells.js';


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
            content: 'Log into your account'
        });

        const form = create({
            type: 'form',
            parent: container,
            attribute: {
                id: 'loginForm'
            },
            listeners: {
                submit(event){
                    logIntoAccount(event);
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
            content: 'Create an account'
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
        const filter = sel('.filter');

        filter.innerHTML = '';

        const container = create({
            classes: ['filterContainer'],
            parent: filter
        });

        const heading = create({
            type: 'h2',
            classes: ['filterHeading'],
            parent: container,
            content: 'Filter by element'
        });

        const form = create({
            type: 'form',
            parent: container,
            attribute: {
                id: 'filterForm'
            }
        });

        const firstRadioContainer = create({
            classes: ['radioContainer'],
            parent: form
        });

        const firstSubContainer = create({
            classes: ['subContainer'],
            parent: firstRadioContainer
        });

        const airLabel = create({
            type: 'label',
            classes: ['elementLabel'],
            parent: firstSubContainer,
            content: 'Air',
            attribute: {
                for: 'airRadio'
            }
        });

        const airRadio = create({
            type: 'input',
            parent: firstSubContainer,
            attribute: {
                type: 'radio',
                id: 'airRadio',
                name: 'elementType',
                value: 'Air'
            },
            listeners: {
                change(event){
                    filterElements(event);
                }
            }
        });

        const secondSubContainer = create({
            classes: ['subContainer'],
            parent: firstRadioContainer
        });

        const earthLabel = create({
            type: 'label',
            classes: ['elementLabel'],
            parent: secondSubContainer,
            content: 'Earth',
            attribute: {
                for: 'earthRadio'
            }
        });

        const earthRadio = create({
            type: 'input',
            parent: secondSubContainer,
            attribute: {
                type: 'radio',
                id: 'earthRadio',
                name: 'elementType',
                value: 'Earth'
            },
            listeners: {
                change(event){
                    filterElements(event);
                }
            }
        });

        const secondRadioContainer = create({
            classes: ['radioContainer'],
            parent: form
        });

        const thirdSubContainer = create({
            classes: ['subContainer'],
            parent: secondRadioContainer
        });

        const fireLabel = create({
            type: 'label',
            classes: ['elementLabel'],
            parent: thirdSubContainer,
            content: 'Fire',
            attribute: {
                for: 'fireRadio'
            }
        });

        const fireRadio = create({
            type: 'input',
            parent: thirdSubContainer,
            attribute: {
                type: 'radio',
                id: 'fireRadio',
                name: 'elementType',
                value: 'Fire'
            },
            listeners: {
                change(event){
                    filterElements(event);
                }
            }
        });

        const fourthSubContainer = create({
            classes: ['subContainer'],
            parent: secondRadioContainer
        });

        const waterLabel = create({
            type: 'label',
            classes: ['elementLabel'],
            parent: fourthSubContainer,
            content: 'Water',
            attribute: {
                for: 'waterRadio'
            }
        });

        const waterRadio = create({
            type: 'input',
            parent: fourthSubContainer,
            attribute: {
                type: 'radio',
                id: 'waterRadio',
                name: 'elementType',
                value: 'Water'
            },
            listeners: {
                change(event){
                    filterElements(event);
                }
            }
        });

        const results = create({
            classes: ['filterResults'],
            parent: container
        });
    },

    renderSearch() {
        const search = sel('.search');

        search.innerHTML = '';

        const container = create({
            classes: ['searchContainer'],
            parent: search
        });

        const heading = create({
            type: 'h2',
            classes: ['searchHeading'],
            parent: container,
            content: 'Search for a spell'
        })

        const searchContainer = create({
            classes: ['searchInputContainer'],
            parent: container
        });

        const searchInput = create({
            type: 'input',
            parent: searchContainer,
            attribute: {
                type: 'text',
                id: 'searchInput',
                name: 'searchInput',
                placeholder: 'Search'
            },
            listeners: {
                input(event){
                    searchSpell(event)
                }
            }
        });

        const resultsContainer = create({
            classes: ['searchResultsContainer'],
            parent: container
        });
    },

    renderAddSpell() {
        const add = sel('.add');

        add.innerHTML = '';

        const container = create({
            classes: ['addContainer'],
            parent: add
        });

        const heading = create({
            type: 'h2',
            classes: ['addHeading'],
            content: 'Create a new spell',
            parent: container,
        });

        const form = create({
            type: 'form',
            parent: container,
            attribute: {
                id: 'addForm'
            },
            listeners: {
                submit(event){
                    submitUserSpell(event);
                }
            }
        });

        const nameLabel = create({
            type: 'label',
            parent: form,
            content: 'Name you spell: ',
            attribute: {
                for: 'name'
            }
        });

        const nameInput = create({
            type: 'input',
            parent: form,
            attribute: {
                type: 'text',
                id: 'name',
                name: 'name',
            }
        });

        const elementLabel = create({
            type: 'label',
            parent: form,
            content: 'Choose the element of your spell: ',
            attribute: {
                for: 'element'
            }
        });

        const addSelect = create({
            type: 'select',
            parent: form,
            attribute: {
                name: 'element',
                id: 'element'
            }
        });

        const addGroup = create({
            type: 'optgroup',
            parent: addSelect,
            attribute: {
                label: 'Element'
            }
        });

        const air = create({
            type: 'option',
            parent: addGroup,
            content: 'Air',
            attribute: {
                value: 'Air'
            }
        });

        const earth = create({
            type: 'option',
            parent: addGroup,
            content: 'Earth',
            attribute: {
                value: 'Earth'
            }
        });

        const fire = create({
            type: 'option',
            parent: addGroup,
            content: 'Fire',
            attribute: {
                value: 'Fire'
            }
        });

        const water = create({
            type: 'option',
            parent: addGroup,
            content: 'Water',
            attribute: {
                value: 'Water'
            }
        });

        const descriptionLabel = create({
            type: 'label',
            parent: form,
            content: 'Describe your spell and how to use it: ',
            attribute: {
                for: 'description'
            }
        });

        const description = create({
            type: 'textarea',
            parent: form,
            attribute: {
                name: 'description',
                id: 'description',
                cols: '40',
                rows: '10'
            }
        });

        const imageLabel = create({
            type: 'label',
            parent: form,
            content: 'Upload an image for your spell: ',
            attribute: {
                for: 'image'
            }
        });

        const image = create({
            type: 'input',
            parent: form,
            attribute: {
                type: 'file',
                name: 'image',
                id: 'image'
            }
        });

        const button = create({
            type: 'button',
            parent: form,
            content: 'Submit Your Spell',
            attribute: {
                id: 'addSubmit'
            }
        });
        
    }
}

const renderLogin = renderFunctions.renderLogin;
const renderRegister = renderFunctions.renderRegister;
const renderFilter = renderFunctions.renderFilter;
const renderSearch = renderFunctions.renderSearch;
const renderAddSpell = renderFunctions.renderAddSpell;

export { renderLogin, renderRegister, renderFilter, renderSearch, renderAddSpell };