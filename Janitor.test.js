const Janitor = require(`./Janitor`);

describe("Janitor", () => {
    const underTest = new Janitor();

    describe(`getSweeping`, () => {
        test(`should return if janitor is sweeping the floor`, () => {
            const actual = underTest.getSweeping();
            expect(actual).toBeTruthy();
        })
   })
})
