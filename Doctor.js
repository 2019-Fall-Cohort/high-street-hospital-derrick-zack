class Doctor {
    constructor() {
        this.isSeeingPatient = false;
        this.speciality = "Heads";
    }
    getIsSeeingPatient() {return this.isSeeingPatient;}
    getSpeciality() {return this.speciality;}

    setSpeciality(newSpeciality) {this.speciality = newSpeciality;}
    setIsSeeingPatient(newIsSeeingPatient) {this.isSeeingPatient = newIsSeeingPatient;}
}

module.exports = Doctor;