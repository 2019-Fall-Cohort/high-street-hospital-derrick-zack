const BLOOD_LEVEL = 20;
const HEALTH_LEVEL = 10;
const canHaveBloodDrawn = {
    drawBlood() {
        if (this.bloodLevel > 2){
            this.bloodLevel -= 2 ;
        }
    }
}
const canReceiveCare = {
    careForPatient() {
        if (this.healthLevel > 2){
            this.healthLevel += 6 ;
        }  
    }
}
class Patient{
    constructor(bloodLevel = BLOOD_LEVEL, healthLevel = HEALTH_LEVEL) {
        this.patients;
        this.patientId = "DEF456 Derrick White";
        this.patientIllness = "";
        this.bloodLevel = bloodLevel;
        this.healthLevel = healthLevel;
        Object.assign(this, canHaveBloodDrawn);
        Object.assign(this, canReceiveCare);
        this.activatePatientsMap();
    }
    activatePatientsMap() {
        this.patients = new Map();
        this.patients.set("GHI789", "RZA");
        this.patients.set("JKL012", "GZA");
        this.patients.set("MNO345", "Method Man");
        this.patients.set("PQR678", "Raekwon");
        this.patients.set("STU901", "Ghostface Killah");
        this.patients.set("VWX234", "Inspectah Deck");
        this.patients.set("YZA567", "Ol' Dirty Bastard");
        this.patients.set("BCD890", "U-God");
        this.patients.set("EFG123", "Masta Killa");
    }

    getPatientId() {return this.patientId;}
    getBloodLevel() {return this.bloodLevel;}
    getHealthLevel() {return this.healthLevel;}
    getPatientIllness() {return this.patientIllness;}

    giveBlood() {this.bloodLevel -= 2;}
    receiveCare() {this.healthLevel += 6;}
    inflictPatientIllness() {
        let newIllness = Math.random();
        if (newIllness <= .49) {
            this.patientIllness = "Tails";
        } else {
            this.patientIllness = "Heads";
        }
    }
    getPatientId() {
        patients.forEach(patientId);
        function patientId(id, name) {
            patients.push(`${id}`, `${name}`);
            return patients;
        }
    }
}

module.exports = Patient;