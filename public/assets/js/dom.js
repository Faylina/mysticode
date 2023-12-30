'use strict';

const domElements = {};

const mapDOM = () => {
    domElements.cover = document.querySelector('.cover'); 
    domElements.book = document.querySelector('.book');
    domElements.closeBook = document.querySelector('.close-book');
}

mapDOM();

export { domElements }; 