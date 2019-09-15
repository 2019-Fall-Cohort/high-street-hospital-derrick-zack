const Receptionist = require(`./Receptionist`);

describe("Receptionist", () => {
    const underTest = new Receptionist();

    describe(`getIsOnPhone`, () => {
        test(`should return if receptionist is on a phone call`, () => {
            const actual = underTest.getIsOnPhone();
            expect(actual).toBeTruthy();
        })
   })
})
