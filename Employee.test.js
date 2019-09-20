const Employee = require("./Employee");
describe("Employee", () => {
    const underTest = new Employee("ABC123", "Zack", "Kramer");
    describe("getFullName", () => {
        test("when called returns employee's full name", () => {
            const actual = underTest.getFullName();
            expect(actual).toBe("Zack Kramer");
        })
    })
    describe("getId", () => {
        test("when called returns employee's ID", () => {
            const actual = underTest.getId();
            expect(actual).toBe("ABC123");
        })
    })
    describe("getJobPosition", () => {
        test("when called returns employee's job position", () => {
            const actual = underTest.getJobPosition();
            expect(actual).toBe("Dictor");
        })
    })
    describe("getSalary", () => {
        test("when called returns employee's salary", () => {
            const actual = underTest.getSalary();
            expect(actual).toBe(1001);
        })
    })
})
