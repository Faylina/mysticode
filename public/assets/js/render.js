'use strict';

import { create, sel, selAll } from './dom.js'; 
import { loadSpells, deleteSpells, deleteAndReload, reload} from './ajax.js';
import { showSpell } from './showSpell.js';

const render = {
    renderAllSpells(contents) {
        const submitted = sel('.submitted');

        submitted.innerHTML = '';

        contents.forEach(content => {

            const path = content.image.filepath;
            const size = content.image.size;

            const container = create({
                classes: ['backendContainer'],
                parent: submitted
            });

            const textContainer = create({
                classes: ['backendTextContainer'],
                parent: container
            });

            const name = create({
                classes: ['backendName'],
                parent: textContainer,
                content: content.name
            });

            const element = create({
                classes: ['backendElement'],
                parent: textContainer,
                content: `Element: ${content.element}`
            });

            const description = create({
                classes: ['backendDescription'],
                parent: textContainer,
                content: content.description
            });

            const imageContainer = create({
                classes: ['backendImageContainer'],
                parent: container
            });

            const image = create({
                type: 'img',
                classes: ['backendImage'],
                parent: imageContainer,
                attribute: {
                    src: `/assets/images/uploads/${content.image.newFilename}`,
                    alt: 'Spell Image'
                }
            });

            const delContainer = create({
                classes: ['delContainer'],
                parent: imageContainer,
                listeners: {
                    click(){
                        deleteAndReload(content._id, content._rev, path, size);
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

    renderSpell(content) {
        const spell = sel('.spell');

        spell.innerHTML = '';

            const container = create({
                classes: ['singleSpellContainer'],
                parent: spell
            });

            const textContainer = create({
                classes: ['singleTextContainer'],
                parent: container
            });

            const name = create({
                classes: ['singleSpellName'],
                parent: textContainer,
                content: content.name
            });

            const element = create({
                classes: ['singleSpellElement'],
                parent: textContainer,
                content: `Element: ${content.element}`
            });

            const description = create({
                classes: ['singleSpellDescription'],
                parent: textContainer,
                content: content.description
            });

            const imageContainer = create({
                classes: ['singleImageContainer'],
                parent: container
            });

            const image = create({
                type: 'img',
                classes: ['singleSpellImage'],
                parent: imageContainer,
                attribute: {
                    src: `/assets/images/uploads/${content.image.newFilename}`,
                    alt: 'Spell Image'
                }
            }); 
        
    },

    renderPreview(contents, target) {
        const el = sel(target);

        el.innerHTML = '<h2>Choose Your Spell</h2>';

        contents.forEach(content => {

            const container = create({
                classes: ['spellsContainer'],
                parent: el,
                listeners: {
                    click(){
                        showSpell(content._id, content._rev);
                    }
                }
            });

            const imageContainer = create({
                classes: ['imageContainer'],
                parent: container
            });

            const image = create({
                type: 'img',
                classes: ['spellImage'],
                parent: imageContainer,
                attribute: {
                    src: `/assets/images/uploads/${content.image.newFilename}`,
                    alt: 'Spell Image'
                }
            });

            const textContainer = create({
                classes: ['textContainer'],
                parent: container
            });

            const name = create({
                classes: ['spellsName'],
                parent: textContainer,
                content: content.name
            });

            const element = create({
                classes: ['spellsElement'],
                parent: textContainer,
                content: `Element: ${content.element}`
            });
        })
    }
}

const renderAllSpells = render.renderAllSpells;
const renderSpell = render.renderSpell;
const renderPreview = render.renderPreview;

export { renderAllSpells, renderSpell, renderPreview };