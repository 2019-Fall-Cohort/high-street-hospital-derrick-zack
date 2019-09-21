const Patient = require(`./Patient`);
describe("Patient class", () => {
    const underTest = new Patient();
    describe("getPatientId", () => {
        test("should return the ID of the patient", () => {
            actual = typeof underTest.getPatientId();
            expect(actual).toBe("string");
        })
    })
    describe("getBloodLevel", () => {
        test("should return the patient's blood level", () => {
            actual = underTest.getBloodLevel();
            expect(actual).toBe(20);
        })
    })
    describe("getHealthLevel", () => {
        test("should return the patient's health level", () => {
            actual = underTest.getHealthLevel();
            expect(actual).toBe(10);
        })
    })
    describe("inflictPatientIllness", () => {
        test(`should set patientIllness variable to either "Heads" or "Tails"`, () => {
            actualBefore = underTest.getPatientIllness();
            underTest.inflictPatientIllness();
            actualAfter = typeof underTest.getPatientIllness();
            expect(actualBefore).toBe("");
            expect(actualAfter).toBe("string");
        })
    })
    describe("getPatientIllness", () => {
        test("should return a string that defines their illness(Heads or Tails)", () => {
            underTest.inflictPatientIllness();
            actual = typeof underTest.getPatientIllness();
            expect(actual).toBe("string");
        })
    })
})