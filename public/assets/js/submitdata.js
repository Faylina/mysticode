'use strict';

import { domElements } from './dom.js';

const submitdata = (event) => {
    event.preventDefault();

    const spell = new FormData(domElements.form);

    fetch('/saveNewSpells', {
        method: 'post', 
        body: spell
    }).then(
        res => res.json()
    ).then(
        console.log
    ).catch(
        console.warn
    )

}

export { submitdata };