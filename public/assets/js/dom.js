'use strict';

const domElements = {};

const mapDOM = () => {
    domElements.cover = document.querySelector('.cover'); 
    domElements.book = document.querySelector('.book');
}

mapDOM();

export { domElements }; 