'use strict';

import { domElements, mapDOM, sel } from './dom.js';
import { loadSpells, deleteSpells, deleteAndReload, reload } from './ajax.js';
import { renderAddSpell } from './renderFunctions.js';

mapDOM();

const submitdata = (event) => {
    event.preventDefault();

    const spell = new FormData(domElements.form);

    fetch('/saveNewSpells', {
        method: 'post', 
        body: spell
    }).then(
        res => reload(res)
    ).then(
        console.log('Reload successful')
    ).catch(
        console.warn
    )

    domElements.name.value = "";
    domElements.description.value = "";
}

const submitUserSpell = (event) => {
    event.preventDefault();

    domElements.addForm = document.querySelector('#addForm');

    const spell = new FormData(domElements.addForm);

    fetch('/saveNewSpells', {
        method: 'post', 
        body: spell
    }).then(
        renderAddSpell()
    ).then(
        console.log('Reload successful')
    ).catch(
        console.warn
    )
}

export { submitdata, submitUserSpell };