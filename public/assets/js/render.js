'use strict';

import { create, sel, selAll } from './dom.js'; 
import { loadSpells, deleteSpells } from './ajax.js';

const render = {
    renderAllSpells(contents) {
        const submitted = sel('.submitted');

        submitted.innerHTML = '';

        contents.forEach(content => {

            const container = create({
                classes: ['backendContainer'],
                parent: submitted
            });

            const name = create({
                classes: ['backendName'],
                parent: container,
                content: content.name
            });

            const element = create({
                classes: ['backendElement'],
                parent: container,
                content: content.element
            });

            const description = create({
                classes: ['backendDescription'],
                parent: container,
                content: content.description
            });

            const image = create({
                type: 'img',
                classes: ['backendImage'],
                parent: container,
                attribute: {
                    src: `/assets/images/uploads/${content.image.newFilename}`
                }
            });


            const delContainer = create({
                classes: ['delContainer'],
                parent: container,
                listener: {
                    click(){
                        deleteSpells(content._id, content._rev);
                    }
                }
            })

            const trashcan = create({
                type: 'img',
                classes: ['trash'],
                parent: delContainer,
                attribute: {
                    src: '/assets/images/trash.png'
                }
            })
        })
    },

    renderSpell(contents) {
        const spell = sel('.spell');

        spell.innerHTML = '';

        contents.forEach(content => {

            const container = create({
                classes: ['spellContainer'],
                parent: spell
            });

            const name = create({
                classes: ['spellName'],
                parent: container,
                content: content.name
            });

            const element = create({
                classes: ['spellElement'],
                parent: container,
                content: content.element
            });

            const description = create({
                classes: ['spellDescription'],
                parent: container,
                content: content.description
            });

            const image = create({
                type: 'img',
                classes: ['spellImage'],
                parent: container,
                attribute: {
                    src: `/assets/images/uploads/${image}`
                }
            });
        })
    },

    renderPreview(contents) {
        const spells = sel('.spells');

        spells.innerHTML = '';

        contents.forEach(content => {

            const container = create({
                classes: ['spellsContainer'],
                parent: spells
            });

            const name = create({
                classes: ['spellsName'],
                parent: container,
                content: content.name
            });

            const element = create({
                classes: ['spellsElement'],
                parent: container,
                content: content.element
            });
        })
    }
}

const renderAllSpells = render.renderAllSpells;
const renderSpell = render.renderSpell;
const renderPreview = render.renderPreview;

export { renderAllSpells, renderSpell, renderPreview };