'use strict';

import { domElements, mapDOM } from './dom.js';
import { loadSpells, deleteSpells, deleteAndReload, reload } from './ajax.js';

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

export { submitdata };