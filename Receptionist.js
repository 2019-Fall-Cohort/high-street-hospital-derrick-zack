class Receptionist {
/*    isEmployee() {
      return this.employee;
    }
*/
    constructor() {
      //this.employee = true;
        this.isOnPhone = true;
    }
    getIsOnPhone() {
        return this.isOnPhone;
    }
    setIsOnPhone(ring) {
      this.isOnPhone = ring;
    }
}
module.exports = Receptionist;