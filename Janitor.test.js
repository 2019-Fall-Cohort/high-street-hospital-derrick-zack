const Janitor = require(`./Janitor`);

describe("Janitor", () => {
    const underTest = new Janitor();

    describe(`getSweeping`, () => {
        test(`should return if janitor is sweeping the floor`, () => {
            const actual = underTest.getSweeping();
            expect(actual).toBeTruthy();
        })
    })
    describe(`setSweeping`, () => {
        test(`should set this.sweeping to the passed parameter(boolean)`, () => {
            underTest.setSweeping(false);
            const actual = underTest.getSweeping();
            expect(actual).toBeFalsy();
        })
    })    
})
