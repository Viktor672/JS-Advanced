import { assert } from 'chai';
import { createCalculator } from '../script.js';

describe('test the functionality of createCalculator', () => {
    let calculatorFunction;
    beforeEach(() => calculatorFunction = createCalculator());
    it('should return initial value', () => {
        let actualResult = calculatorFunction.get();
        let expectedResult = 0;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return the correct value after the add function is called', () => {
        calculatorFunction.add(2);
        let actualResult = calculatorFunction.get();
        let expectedResult = 2;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return the correct value after the subtract function is called', () => {
        calculatorFunction.subtract(2);
        let actualResult = calculatorFunction.get();
        let expectedResult = -2;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return the correct value after the subtract function is called', () => {
        calculatorFunction.subtract('3');
        let actualResult = calculatorFunction.get();
        let expectedResult = -3;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return the correct value after the add function is called', () => {
        calculatorFunction.add('4');
        let actualResult = calculatorFunction.get();
        let expectedResult = 4;
        assert.deepEqual(actualResult, expectedResult);
    })
})