const Employee = require(`./Employee`);
const Patient = require(`./Patient`);
const Gary = new Patient;

class Nurse {
    constructor() {
        this.gary = Gary;
    }
    drawBlood() {
        this.gary.giveBlood();
    }
}
module.exports = Nurse;