class Surgeon{
    constructor(){
        this.isOperating = false;
        this.speciality = "Tails";
    }
    getIsOperating() {return this.isOperating;}
    getSpeciality() {return this.speciality;}
}

module.exports = Surgeon;