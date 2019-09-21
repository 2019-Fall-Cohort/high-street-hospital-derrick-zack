const Doctor = require(`./Doctor`);

describe("Doctor", () => {
    const underTest = new Doctor();

    describe("getIsSeeingPatient", () => {
        test("should return if Doctor is seeing a patient", () => {
            const actual = underTest.getIsSeeingPatient();
            expect(actual).toBeFalsy();
        })
    })
    describe("getSpeciality", () => {
        test("should return a string describing the doc's speciality", () => {
            const actual = underTest.speciality;
            expect(actual).toBe("Heads");
        })
    })
    describe("setSpeciality",() => {
        test("should change the doctor's speciality to the passed parameter", () => {
            underTest.setSpeciality("Heads");
            const actual = underTest.getSpeciality();
            expect(actual).toBe("Heads");
        })
    })
    describe("setIsSeeingPatient", () => {
        test("should change the doctor's operating status to the passed parameter", () => {
            underTest.setIsSeeingPatient(true);
            const actual = underTest.getIsSeeingPatient();
            expect(actual).toBeTruthy();
        })
    })
})