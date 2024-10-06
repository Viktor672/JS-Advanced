import { assert } from 'chai';
import { mathEnforcer } from '../script.js';

describe('test functionality of the functions of mathEnforcer', () => {
    describe('test the functionality of addFive', () => {
        it('return undefined', () => {
            let actualResult = mathEnforcer.addFive('');
            let expectedResult = undefined;
            assert.deepEqual(actualResult, expectedResult);
        })

        it('return undefined', () => {
            let actualResult = mathEnforcer.addFive([]);
            let expectedResult = undefined;
            assert.deepEqual(actualResult, expectedResult);
        })

        it('return undefined', () => {
            let actualResult = mathEnforcer.addFive({});
            let expectedResult = undefined;
            assert.deepEqual(actualResult, expectedResult);
        })

        it('return correct output with floating-point number', () => {
            let actualResult = mathEnforcer.addFive(-4.5);
            let expectedResult = 0.5;
            assert.closeTo(actualResult, expectedResult, 0.1);
        })

        it('return correct output with floating-point number', () => {
            let actualResult = mathEnforcer.addFive(3.4);
            let expectedResult = 8.4;
            assert.closeTo(actualResult, expectedResult, 0.1);
        })

        it('return correct output with integers', () => {
            let actualResult = mathEnforcer.addFive(3);
            let expectedResult = 8;
            assert.deepEqual(actualResult, expectedResult);
        })

        it('return correct output with integers', () => {
            let actualResult = mathEnforcer.addFive(9);
            let expectedResult = 14;
            assert.deepEqual(actualResult, expectedResult);
        })
    })

    describe('test the functionality of subractTen', () => {
        it('return undefined', () => {
            let actualResult = mathEnforcer.subtractTen('');
            let expectedResult = undefined;
            assert.deepEqual(actualResult, expectedResult);
        })

        it('return undefined', () => {
            let actualResult = mathEnforcer.subtractTen([]);
            let expectedResult = undefined;
            assert.deepEqual(actualResult, expectedResult);
        })

        it('return undefined', () => {
            let actualResult = mathEnforcer.subtractTen({});
            let expectedResult = undefined;
            assert.deepEqual(actualResult, expectedResult);
        })

        it('return correct output with floating-point number', () => {
            let actualResult = mathEnforcer.subtractTen(-4.5);
            let expectedResult = -14.5;
            assert.closeTo(actualResult, expectedResult, 0.1);
        })

        it('return correct output with floating-point number', () => {
            let actualResult = mathEnforcer.subtractTen(3.4);
            let expectedResult = -6.6;
            assert.closeTo(actualResult, expectedResult, 0.1);
        })

        it('return correct output with integers', () => {
            let actualResult = mathEnforcer.subtractTen(13);
            let expectedResult = 3;
            assert.deepEqual(actualResult, expectedResult);
        })

        it('return correct output with integers', () => {
            let actualResult = mathEnforcer.subtractTen(27);
            let expectedResult = 17;
            assert.deepEqual(actualResult, expectedResult);
        })
    })

    describe('test the functionality of sum', () => {
        it('return undefined', () => {
            let actualResult = mathEnforcer.sum('', 3);
            let expectedResult = undefined;
            assert.deepEqual(actualResult, expectedResult);
        })

        it('return undefined', () => {
            let actualResult = mathEnforcer.sum(5, '');
            let expectedResult = undefined;
            assert.deepEqual(actualResult, expectedResult);
        })

        it('return correct output with floating-point number', () => {
            let actualResult = mathEnforcer.sum(-4.5, 2.1);
            let expectedResult = -2.4;
            assert.closeTo(actualResult, expectedResult, 0.1);
        })

        it('return correct output with floating-point number', () => {
            let actualResult = mathEnforcer.sum(3.4, 6.3);
            let expectedResult = 9.7;
            assert.closeTo(actualResult, expectedResult, 0.1);
        })

        it('return correct output with integers', () => {
            let actualResult = mathEnforcer.sum(13, 16);
            let expectedResult = 29;
            assert.deepEqual(actualResult, expectedResult);
        })

        it('return correct output with integers', () => {
            let actualResult = mathEnforcer.sum(48, 76);
            let expectedResult = 124;
            assert.deepEqual(actualResult, expectedResult);
        })
    })
})
