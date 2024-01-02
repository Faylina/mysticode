'use strict';

const domElements = {};

const mapDOM = () => {
    domElements.cover = document.querySelector('.cover'); 
    domElements.book = document.querySelector('.book');
    domElements.closeBook = document.querySelector('.close-book');
    domElements.submit = document.querySelector('#submit');
    domElements.form = document.querySelector('#form-backend');
}

export { domElements, mapDOM }; 