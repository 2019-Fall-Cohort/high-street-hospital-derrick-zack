class Surgeon{
    constructor(){
        this.isOperating = false;
        this.speciality = "Tails";
    }
    getIsOperating() {return this.isOperating;}
    getSpeciality() {return this.speciality;}

    setSpeciality(newSpeciality) {this.speciality = newSpeciality;}
    setIsOperating(newIsOperating) {this.isOperating = newIsOperating;}
}

module.exports = Surgeon;