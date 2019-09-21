/*
const Doctor = require(`./Doctor`);
const Surgeon = require(`./Surgeon`);
const Nurse = require(`./Nurse`);
const Janitor = require(`./Janitor`);
const Vampire = require(`./Vampire`);
*/

class Employee {

    constructor(id, firstName = "", lastName = ""){
        this.employee = true;
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.jobPosition = "Dictor";
        this.salary = 1001;
    }

    getFullName(){return `${this.firstName} ${this.lastName}`;}

    getId(){return this.id;}

    getJobPosition(){return this.jobPosition;}

    getSalary(){return this.salary;}
}

module.exports = Employee;