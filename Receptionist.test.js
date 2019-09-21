const Receptionist = require(`./Receptionist`);

describe("Receptionist", () => {
    const underTest = new Receptionist();

    describe(`getIsOnPhone`, () => {
        test(`should return if receptionist is on a phone call`, () => {
            const actual = underTest.getIsOnPhone();
            expect(actual).toBeTruthy();
        })
   })
   describe(`setIsOnPhone)`, () => {
       test(`should set isOnPhone to the passed parameter (boolean)`, () => {
           underTest.setIsOnPhone(false);
           const actual = underTest.getIsOnPhone();
           expect(actual).toBeFalsy();
       })
   })
})
