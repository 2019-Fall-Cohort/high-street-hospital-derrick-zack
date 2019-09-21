const Employee = require(`./Employee`);
class Doctor {
    constructor() {
        this.isSeeingPatient = false;
        this.speciality = "Heads";
    }
    getIsSeeingPatient() {return this.isSeeingPatient;}
    getSpeciality() {return this.speciality;}

    setSpeciality(newSpeciality) {this.speciality = newSpeciality;}
    setIsSeeingPatient(newIsSeeingPatient) {this.isSeeingPatient = newIsSeeingPatient;}

    // hireNewDoctor() {
    //     newDoctor = new Employee(DEF456, Derrick, White);
    //     console.log(newDoctor);
    // }
}

module.exports = Doctor;

