'use strict';

class Spell {
    constructor(name, element, description, image) {
        Object.assign(this, { name, element, description });
        this.crDate = Date.now();
        this.id = (Math.random() * 1e17).toString(36);

        this.image = null;

        if(image) {
            if(image instanceof File && image.size > 0) {
            this.image = image.name;
          } else {
            console.log('No Image');
          }
        }
    }
}
const classes = {
    Spell,
}

export default classes;