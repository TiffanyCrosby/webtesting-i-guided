const { add } = require('./calculator.js');
const { TestScheduler } = require('jest');


// test away!
it('checks references', () => {
    expect({a:1}).toEqual({a:1});
    expect([1, 2]).toEqual([1, 2]);
    expect([1, 2, 3]).toHaveLength(3);
})

describe('calculator', () => {
    it('should run tests using it()', () => {
        expect(true).toBe(true);
        expect(true).toBeTruthy();
        expect(true).not.toBeUndefined();
    })

    describe('add()', () => {
        test('should add two numbers', () => {
            //setup
            const expected = 4;
            const a = 2;
            const b = 2;

            //execute SUT(System Under Test)
            const actual = add(a,b);

            //assertions
            expect(actual).toBe(expected);
        });

        it('should add two values', () => {
            expect(add(2,2)).toBe(4);
            expect(add(-2,2)).toBe(0);
            expect(add(-2,0)).toBe(-2);
        });

        it('should return the value when given only one value', function() {
            expect(add(2)).toBe(2);
            expect(add(undefined, 3)).toBe(3);
        })
       

        it('add unlimited numbers separated by comma', () => {
            expect(add(1, 2)).toBe(3);
            expect(add(1, 2, 3)).toBe(6);
            expect(add(-1, 2, 3)).toBe(4);
        });

        it('add an array of values', () => {
            expect(add([1, 2])).toBe(3);
            expect(add([1, 2, 3])).toBe(6);
            expect(add([-1, 2, 3])).toBe(4);
        })

    });
});
