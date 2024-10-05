import { sum } from '../script.js';
import { assert } from 'chai';
describe('test functionality of sum', () => {
    it('should take an arr with positive numbers as an argument', () => {
        let input = [1, 2, 3];
        let actualResult = sum(input);
        let expectetResult = 6;
        assert.equal(actualResult, expectetResult);
    })
    it('should return 0', () => {
        let input = [];
        let actualResult = sum(input);
        let expectetResult = 0;
        assert.equal(actualResult, expectetResult);
    })
    it('should take an arr with negative numbers as an argument', () => {
        let input = [-10, -5, -3];
        let actualResult = sum(input);
        let expectetResult = -18;
        assert.equal(actualResult, expectetResult);
    })

})
