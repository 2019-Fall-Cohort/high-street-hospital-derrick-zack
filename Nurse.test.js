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