class Janitor {
    /* isEmployee() {
        return this.employee;
      }
    */
    constructor() {
    //this.employee = true;
        this.Sweeping = true;
      }
      getSweeping() {
        return this.Sweeping;
      }
      setSweeping(broom) {
        this.Sweeping = broom;
      }
    }
    module.exports = Janitor;