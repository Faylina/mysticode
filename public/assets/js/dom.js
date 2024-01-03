'use strict';

// static DOM

const domElements = {};

const mapDOM = () => {
    domElements.cover = document.querySelector('.cover'); 
    domElements.book = document.querySelector('.book');
    domElements.closeBook = document.querySelector('.close-book');
    domElements.submit = document.querySelector('#submit');
    domElements.form = document.querySelector('#form-backend');
    domElements.name = document.querySelector('#name');
    domElements.description = document.querySelector('#description');
    domElements.listSpells = document.querySelector('.listSpells');
    domElements.searchSpells = document.querySelector('.searchSpells');
    domElements.filterSpells = document.querySelector('.filterSpells');
    domElements.loginUser = document.querySelector('.loginUser');
    domElements.addSpell = document.querySelector('.addSpell');
    domElements.intro = document.querySelector('.introduction');
    domElements.spells = document.querySelector('.spells');
}

// dynamic DOM

const newDOM = {
    create({
        type = 'div',
        classes = [],
        parent = false,
        content = '',
        attribute = {},
        listeners = {},
    } = {}) {
        let newEl = document.createElement(type);
        if (content) newEl.innerHTML = content;
        if (classes.length) newEl.className = classes.join(' ');
    
        Object.entries(attribute).forEach(el => newEl.setAttribute(...el));
        Object.entries(listeners).forEach(el => newEl.addEventListener(...el));
    
        parent.append(newEl);
    
        return newEl;
    },

    sel(selector) {
        return document.querySelector(selector);
    },

    selAll(selector) {
        return [...document.querySelectorAll(selector)];
    }
}

const create = newDOM.create;
const sel = newDOM.sel;
const selAll = newDOM.selAll;

export { domElements, mapDOM, create, sel, selAll }; 