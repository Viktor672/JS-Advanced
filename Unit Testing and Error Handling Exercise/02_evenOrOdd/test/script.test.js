import { assert } from 'chai';
import { isOddOrEven } from '../script.js';

describe('test the functionality of isOddOrEven', () => {
    it('return undefined', () => {
        let input = 25;
        let actualResult = isOddOrEven(input);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })

    it('return undefined', () => {
        let input = [];
        let actualResult = isOddOrEven(input);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })

    it('return even', () => {
        let input = 'star';
        let actualResult = isOddOrEven(input);
        let expectedResult = 'even';
        assert.deepEqual(actualResult, expectedResult);
    })

    it('return even', () => {
        let input = 'window';
        let actualResult = isOddOrEven(input);
        let expectedResult = 'even';
        assert.deepEqual(actualResult, expectedResult);
    })

    it('return odd', () => {
        let input = 'bed';
        let actualResult = isOddOrEven(input);
        let expectedResult = 'odd';
        assert.deepEqual(actualResult, expectedResult);
    })

    it('return odd', () => {
        let input = 'picture';
        let actualResult = isOddOrEven(input);
        let expectedResult = 'odd';
        assert.deepEqual(actualResult, expectedResult);
    })
})

