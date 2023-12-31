'use strict';

class Spell {
    constructor(name, element, description, image) {
        Object.assign(this, { name, element, description, image });
        this.crDate = Date.now();
        this.id = (Math.random() * 1e17).toString(36);
    }
}

class User {
    constructor(firstName, lastName, registerEmail, registerPassword) {
        Object.assign(this, { firstName, lastName, registerEmail, registerPassword });
        this.crDate = Date.now();
        this.id = (Math.random() * 1e17).toString(36);
    }
}
const classes = {
    Spell,
    User
}

export default classes;