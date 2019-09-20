const Doctor = require(`./Doctor`);

describe("Doctor", () => {
    const underTest = new Doctor();

    describe("constructor method", () => {
        test("should return if Doctor is seeing a patient", () => {
            const actual = underTest.isSeeingPatient;
            expect(actual).toBeFalsy();
        })
    })

    describe("speciality", () => {
        test("should return a string describing the doc's speciality", () => {
            const actual = underTest.doctorSpecialityList;
            expect(actual).toBe("Heads");
        })
    })
})