const Employee = require(`./Employee`);
class Janitor {
    constructor() {
    this.sweeping = true;
    }

   getSweeping() {
    return this.sweeping;
    }
  
    setSweeping(broom) {
    this.sweeping = broom;
    }
}

module.exports = Janitor;