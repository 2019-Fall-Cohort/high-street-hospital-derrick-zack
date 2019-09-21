const Surgeon = require('./Surgeon');

describe("Surgeon", () => {
    const underTest = new Surgeon();
    test("should display whether the surgeon is operating on a patient", () => {
        const actual = underTest.getIsOperating();
        expect(actual).toBeFalsy();
    });
    test("should return a string describing their speciality", () => {
        const actual = underTest.getSpeciality();
        expect(actual).toBe("Tails");
    });
    test("should change the surgeon's speciality to the passed parameter", () => {
        underTest.setSpeciality("Heads");
        const actual = underTest.getSpeciality();
        expect(actual).toBe("Heads");
    })
    test("should change the surgeon's operating status to the passed parameter", () => {
        underTest.setIsOperating(true);
        const actual = underTest.getSpeciality();
        expect(actual).toBeTruthy();
    })

})

