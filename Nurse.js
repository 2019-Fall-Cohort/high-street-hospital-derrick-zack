const Employee = require(`./Employee`);
const Patient = require(`./Patient`);
const Gary = new Patient;
const Jerry = new Patient;

class Nurse {
    constructor() {
        this.gary = Gary;
        this.jerry = Jerry;
    }
    drawBlood() {
        this.gary.giveBlood();
    }
    careForPatient() {
        this.jerry.receiveCare();
    }
}
module.exports = Nurse;