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

    deleteSpells(_id, _rev, imagePath, size) {
        const deleteSpells = async () => {
            try {
                const result = await fetch ('/deleteSpells', {
                    method: 'delete',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify([ _id, _rev, imagePath, size ])
                });
                const spells = await result.json();
                return { status: 'success', data: spells }; 
            } catch (error) {
                console.warn(error); 
                return { status: 'Delete error', error: error };
            }
        }

        return deleteSpells();
    },

    loadAllUsers() {
        const loadUsers = async () => {
            try {
                const result = await fetch('/loadAllUsers');
                const users = await result.json();
                return { status: 'success', data: users }; 
            } catch (error) {
                console.warn(error); 
                return { status: 'Retrieve error', error: error };
            }
        }

        return loadUsers();
    },
}

const loadSpells = ajax.loadAllSpells;
const deleteSpells = ajax.deleteSpells;
const loadUsers = ajax.loadAllUsers;

const deleteAndReload = async (_id, _rev, imagePath, size) => {
    await deleteSpells(_id, _rev, imagePath, size);
    const spells = await loadSpells();
    renderAllSpells(spells.data.data);
}

const reload = async () => {
    const spells = await loadSpells();
    renderAllSpells(spells.data.data);
}

export { loadSpells, deleteSpells, loadUsers, deleteAndReload, reload };