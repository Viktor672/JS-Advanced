import { assert } from 'chai';
import { lookupChar } from '../script.js';

describe('test the functionality of lookupchar', () => {
    it('should return undefined', () => {
        let string = 35;
        let index = 2;
        let actualResult = lookupChar(string, index);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })

    it('should return undefined', () => {
        let string = 'str';
        let index = '1';
        let actualResult = lookupChar(string, index);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })

    it('should return Incoreect index', () => {
        let string = 'str';
        let index = -2;
        let actualResult = lookupChar(string, index);
        let expectedResult = 'Incorrect index';
        assert.deepEqual(actualResult, expectedResult);
    })

    it('should return Incoreect index', () => {
        let string = 'str';
        let index = -'5';
        let actualResult = lookupChar(string, index);
        let expectedResult = 'Incorrect index';
        assert.deepEqual(actualResult, expectedResult);
    })

    it('should return Incoreect index', () => {
        let string = 'str';
        let index = 8;
        let actualResult = lookupChar(string, index);
        let expectedResult = 'Incorrect index';
        assert.deepEqual(actualResult, expectedResult);
    })

    it('should return Incoreect index', () => {
        let string = 'fsafa';
        let index = 16;
        let actualResult = lookupChar(string, index);
        let expectedResult = 'Incorrect index';
        assert.deepEqual(actualResult, expectedResult);
    })

    it('should return the char of the given index', () => {
        let string = 'str';
        let index = 2;
        let actualResult = lookupChar(string, index);
        let expectedResult = 'r';
        assert.deepEqual(actualResult, expectedResult);
    })

    it('should return the char of the given index', () => {
        let string = 'aadas';
        let index = 3;
        let actualResult = lookupChar(string, index);
        let expectedResult = 'a';
        assert.deepEqual(actualResult, expectedResult);
    })

    it('should return the char of the given index', () => {
        let string = 'aadas';
        let index = 3.4;
        let actualResult = lookupChar(string, index);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })

    it('should return the char of the given index', () => {
        let string = 'apfas';
        let index = '5.7';
        let actualResult = lookupChar(string, index);
        let expectedResult = undefined;
        assert.deepEqual(actualResult, expectedResult);
    })
})