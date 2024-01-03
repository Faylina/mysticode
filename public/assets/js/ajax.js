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
                return { status: 'Retrieve error', error: error };
            }
        }

        return loadSpells();
    },

    deleteSpells(_id, _rev) {
        const deleteSpells = async () => {
            try {
                const result = await fetch ('/deleteSpells', {
                    method: 'delete',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify([ _id, _rev ])
                });
                const spells = await result.json();
                return { status: 'success', data: spells }; 
            } catch (error) {
                console.warn(error); 
                return { status: 'Delete error', error: error };
            }
        }

        return deleteSpells();
    } 
}

const loadSpells = ajax.loadAllSpells;
const deleteSpells = ajax.deleteSpells;

const deleteAndReload = async (_id, _rev) => {
    await deleteSpells(_id, _rev);
    const spells = await loadSpells();
    renderAllSpells(spells.data.data);
}

const reload = async () => {
    const spells = await loadSpells();
    renderAllSpells(spells.data.data);
}

export { loadSpells, deleteSpells, deleteAndReload, reload };