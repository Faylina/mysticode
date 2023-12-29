'use strict';

import express from 'express'; 

const server = express(); 

server.use(express.static('public', {
    extensions: ['html', 'htm']
}));

const init = () => {
    
    server.listen(2020, err => console.log(err || 'The server is running.'));
}

init();