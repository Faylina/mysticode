'use strict';

import classes from './classes.js';
import formidable from 'formidable';
import express from 'express'; 
import fs from 'fs';
import nano from 'nano';
import { log } from 'console';

const server = express(); 
server.use(express.static('public'));
server.use(express.json());

let database;
const databaseNames = {
    spells: 'spells'
}


server.post('/saveNewSpells', (request, response) => {
    const myForm = formidable({
        uploadDir: 'public/assets/images/uploads',
        keepExtensions: true,
        allowEmptyFiles: true,
        minFileSize: 0
    });

    myForm.parse(request, (error, fields, files) => {
        if (error) { 
            console.log(error);
            response.json({
                status: 'Form error',
                error
            })
        } else {

            let spell = (new classes.Spell(
                fields.name[0],
                fields.element[0],
                fields.description[0],
                files.image[0]
            )) 

            const image = files.image[0];

            if(image.size === 0) {
                fs.unlinkSync(image.filepath);
            }

            let databaseSpells = database.use(databaseNames.spells);

            const insertAndRetrieveSpells = async () => { 
                try { 
                    await databaseSpells.insert({
                        name: spell.name, 
                        element: spell.element,
                        description: spell.description,
                        image: spell.image
                    }); 
                    const result = await databaseSpells.list({ include_docs: true 
                    }); 
                    const spells = result.rows.map(row => row.doc); 
                    response.json ({ status: 'success', data: spells }); 
                } catch (error) { 
                    console.warn(error); 
                    response.json ({ status: 'Insert error', error }); 
                } }; 
                
            insertAndRetrieveSpells()
            .then(data => response.json(data))
            .catch(error => { console.warn(error); });
        }
    })
})


server.get('/loadAllSpells', (request, response) => {
    const databaseSpells = database.use(databaseNames.spells);

    const retrieveSpells = async () => {
        try {
            const result = await databaseSpells.list({ include_docs: true 
            }); 
            const spells = result.rows.map(row => row.doc); 
            return { status: 'success', data: spells }; 
        } catch (error) {
            console.warn(err); 
            return { status: 'Retrieve error', err };
        }
    }

    retrieveSpells()
        .then(data => response.json(data))
        .catch(error => { console.warn(error); });
})


server.delete('/deleteSpells', async (request, response) => {
    try {
        const databaseSpells = database.use(databaseNames.spells);
        await databaseSpells.destroy(...request.body);
    
        const result = await databaseSpells.list({ include_docs: true });
        const data = result.rows.map(row => row.doc);
    
        response.json({ status: 'success', data });

    } catch (error) {
        console.warn(error);
    }
   });

const fetchCredentials = async () => {
    try {
        const data = await fs.promises.readFile('./data/credentials.json', 'utf8');
        return JSON.parse(data.toString());
    } catch (error) {
        throw error;
    }
   };


const init = async () => {

    const credentials = await fetchCredentials();

    database = nano(`http://${credentials.username}:${credentials.password}@127.0.0.1:5984`).db;

    const checkAndCreateDB = async () => {
        const response = await database.list();
        if (!response.includes(databaseNames.spells)) {
            await database.create(databaseNames.spells)
        }
    }

    const startServer = async () => {
        try {
            await checkAndCreateDB();
            server.listen(2020, err => console.log(err || 'The server is running at port 2020.'))
        } catch(error) {
            console.log(error);
        }
    }

    startServer();
}

init();