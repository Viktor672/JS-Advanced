import { assert } from 'chai';
import { rgbToHexColor } from '../script.js';

describe('test functionality of rgbToHexColor', () => {
    it('should convert rgb to hex', () => {
        let redRgb = 255;
        let greenRgb = 255;
        let blueRgb = 255;
        let actualResult = rgbToHexColor(redRgb, greenRgb, blueRgb);
        let expectedResult = '#FFFFFF';
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should convert rgb to hex', () => {
        let actualResult = rgbToHexColor(111, 134, 123);
        let expectedResult = '#6F867B';
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should convert rgb to hex', () => {
        let actualResult = rgbToHexColor(0, 0, 0);
        let expectedResult = '#000000';
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should convert rgb to hex', () => {
        let actualResult = rgbToHexColor(50, 50, 50);
        let expectedResult = '#323232';
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return undefined', () => {
        let actualResult = rgbToHexColor(567, 12421, 141412);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should convert rgb to hex', () => {
        let actualResult = rgbToHexColor(113, 121, 122);
        let expectedResult = '#71797A';
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should convert rgb to hex', () => {
        let actualResult = rgbToHexColor(156, 25, 21);
        let expectedResult = '#9C1915';
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return undefiend', () => {
        let actualResult = rgbToHexColor(21, -25, 21);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return undefiend', () => {
        let actualResult = rgbToHexColor(-21, 25, 21);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return undefiend', () => {
        let actualResult = rgbToHexColor(21, 25, -23);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return undefiend', () => {
        let actualResult = rgbToHexColor(25, 'green', 65);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return undefiend', () => {
        let actualResult = rgbToHexColor('red', 25, 21);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return undefiend', () => {
        let actualResult = rgbToHexColor(25, 67, 'blue');
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return undefiend', () => {
        let actualResult = rgbToHexColor(12.6, 25, 21);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return undefiend', () => {
        let actualResult = rgbToHexColor(12, 25.7, 21);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })
    it('should return undefiend', () => {
        let actualResult = rgbToHexColor(25, 27, 12.6);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })
})

