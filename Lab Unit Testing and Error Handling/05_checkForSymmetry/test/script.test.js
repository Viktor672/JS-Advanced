import { assert } from 'chai';
import { isSymmetric } from '../script.js';
describe('test functionality of isSymmetric', () => {
    it('should take an arr as an argument', () => {
        let input = [];
        let actualResult = isSymmetric(input);
        let expectedResult = true;
        assert.equal(actualResult, expectedResult);
    })
    it('should return false for wrong type', () => {
        let input = ['1', 1];
        let actualResult = isSymmetric(input);
        let expectedResult = false;
        assert.equal(actualResult, expectedResult);
    })
    it('should return true for symetric arr', () => {
        let input = [1, 2, 3, 3, 2, 1];
        let actualResult = isSymmetric(input);
        let expectedResult = true;
        assert.equal(actualResult, expectedResult);
    })
    it('should return false for wrong input', () => {
        let input = {};
        let actualResult = isSymmetric(input);
        let expectedResult = false;
        assert.equal(actualResult, expectedResult);
    })
    it('should return false for not symetric arr', () => {
        let input = [1, 4, 3, 3, 2, 1];
        let actualResult = isSymmetric(input);
        let expectedResult = false;
        assert.equal(actualResult, expectedResult);
    })
})