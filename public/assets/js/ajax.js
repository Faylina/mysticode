'use strict';

import { renderAllSpells, renderSpell, renderPreview } from './render.js';

const ajax = {

    loadAllSpells() {
        const loadSpells = async () => {
            try {
                const result = await fetch('/loadAllSpells');
                const spells = await result.json();
                return { status: 'success', data: spells }; 
            } catch (error) {
                console.warn(error); 
                return { status: 'Retrieve error', err: error };
            }
        }

        return loadSpells();
    },

    deleteSpells(_id, _rev) {
        const deleteSpells = async () => {
            try {
                const result = await fetch ('deleteSpell', {
                    method: 'delete',
                    headers: { 'content-type': 'application.json' },
                    body: JSON.stringify([ _id, _rev ])
                });
                const spells = await result.json();
                return { status: 'success', data: spells }; 
            } catch (error) {
                console.warn(error); 
                return { status: 'Delete error', err: error };
            }
        };

        return deleteSpells();
    } 
}

const loadSpells = ajax.loadAllSpells;
const deleteSpells = ajax.deleteSpells;

export { loadSpells, deleteSpells };