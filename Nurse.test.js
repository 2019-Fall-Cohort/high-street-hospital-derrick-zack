const Nurse = require(`./Nurse`);
const Patient = require(`./Patient`);

    describe(`drawBlood`, () => {
        const underTest = new Nurse;
        test("should allow nurse to draw blood from patient",() => {
            before = underTest.gary.getBloodLevel();
            underTest.drawBlood();
            after = underTest.gary.getBloodLevel();
        expect(after).toBe(before - 2);
    })
})
    describe(`careForPatient`, () => {
        const underTest = new Nurse;
        test("should allow nurse to care for patient",() => {
            before = underTest.jerry.getHealthLevel();
            underTest.careForPatient();
            after = underTest.jerry.getHealthLevel();
        expect(after).toBe(before + 6);
    })
})