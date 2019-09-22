const BLOOD_LEVEL = 20;
const HEALTH_LEVEL = 10;
const canHaveBloodDrawn = {
    drawBlood() {
        if (this.bloodLevel > 2){
            this.bloodLevel -=2 ;
        }    
    }
}
class Patient{
    constructor(bloodLevel = BLOOD_LEVEL, healthLevel = HEALTH_LEVEL) {
        this.patientId = "DEF456 Derrick White";
        this.patientIllness = "";
        this.bloodLevel = bloodLevel;
        this.healthLevel = healthLevel;
        Object.assign(this, canHaveBloodDrawn);
    }
    getPatientId() {return this.patientId;}

    getBloodLevel() {return this.bloodLevel;}

    getHealthLevel() {return this.healthLevel;}

    getPatientIllness() {return this.patientIllness;}

    inflictPatientIllness(){
        let newIllness = Math.random();
        if (newIllness <= .49) {
            this.patientIllness = "Tails";
        } else {
            this.patientIllness = "Heads";
        }
    }
}

module.exports = Patient;