class Receptionist {
    constructor() {
        this.isOnPhone = true;
    }
    getIsOnPhone() {return this.isOnPhone;}
    setIsOnPhone(ring) {this.isOnPhone = ring;}
}
module.exports = Receptionist;