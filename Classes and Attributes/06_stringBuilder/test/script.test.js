import { assert } from 'chai';
import { StringBuilder } from '../script.js';

describe('test if the task works correctly', () => {
    let input;
    beforeEach(() => {
        input = new StringBuilder();
    })
    describe('test the functionality of StringBuilder', () => {

        it('should give correct output', () => {
            input = new StringBuilder('Hello');
            let actualResult = input.toString();
            let expectedResult = 'Hello';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should give correct output', () => {
            input = new StringBuilder('few');
            let actualResult = input.toString();
            let expectedResult = 'few';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should give correct output', () => {
            let actualResult = input.toString();
            let expectedResult = '';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should give correct output', () => {
            input = new StringBuilder('');
            let actualResult = input.toString();
            let expectedResult = '';
            assert.deepEqual(actualResult, expectedResult);
        });


        it('should throw a type error', () => {
            assert.throws(() => new StringBuilder(21), TypeError, 'Argument must be a string');
        });

        it('should throw a type error', () => {
            assert.throws(() => new StringBuilder({}), TypeError, 'Argument must be a string');
        });

        it('should throw a type error', () => {
            assert.throws(() => new StringBuilder(NaN), TypeError, 'Argument must be a string');
        });
    });

    describe('test the functionality of append', () => {

        it('should append correctly', () => {
            input.append('ab');
            input.append('cd');
            input.append('ef');
            let actualResult = input.toString();
            let expectedResult = 'abcdef';  //possible error
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should append correctly', () => {
            input.append('as');
            input.append('df');
            input.append('gh');
            let actualResult = input.toString();
            let expectedResult = 'asdfgh';  //possible error
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should append to an empty arr', () => {
            input.append('something');
            let actualResult = input.toString();
            let expectedResult = 'something';  //possible error
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should append to an empty arr', () => {
            input.append('something');
            input.append('something else');
            let actualResult = input.toString();
            let expectedResult = 'somethingsomething else';  //possible error
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should append to an empty arr', () => {
            input.append('');
            input.append('');
            let actualResult = input.toString();
            let expectedResult = '';  //possible error
            assert.deepEqual(actualResult, expectedResult);
        });


    });

    describe('test functionality of prepend', () => {

        it('should prepend correctly', () => {
            input.prepend('ab');
            input.prepend('cd');
            input.prepend('ef');
            let actualResult = input.toString();
            let expectedResult = 'efcdab';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should prepend correctly', () => {
            input.prepend('as');
            input.prepend('df');
            input.prepend('gh');
            let actualResult = input.toString();
            let expectedResult = 'ghdfas';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should prepend to an empty arr', () => {
            input.prepend('something');
            let actualResult = input.toString();
            let expectedResult = 'something';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should prepend to an existing arr', () => {
            input.prepend('something');
            input.prepend('something else')
            let actualResult = input.toString();
            let expectedResult = 'something elsesomething';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should prepend to an empty arr', () => {
            input.prepend('');
            input.prepend('');
            let actualResult = input.toString();
            let expectedResult = '';  //possible error
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should prepend to an empty arr', () => {
            input.prepend('');
            input.prepend('d');
            let actualResult = input.toString();
            let expectedResult = 'd';  //possible error
            assert.deepEqual(actualResult, expectedResult);
        });
    });

    describe('test functionality of insertAt', () => {

        it('should insert string at given index', () => {
            input = new StringBuilder('eho');
            input.insertAt('c', 2);
            let actualResult = input.toString();
            let expectedResult = 'ehco';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should return the same string', () => {
            input = new StringBuilder('eho');
            input.insertAt('', 1);
            let actualResult = input.toString();
            let expectedResult = 'eho';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should throw typeError', () => {
            input = new StringBuilder('eho');
            assert.throws(() => input.insertAt(2, 3), TypeError, 'Argument must be a string');
        });

        it('should throw typeError', () => {
            input = new StringBuilder('eho');
            assert.throws(() => input.insertAt([], 3), TypeError, 'Argument must be a string');
        });

    });

    describe('test the functionality of remove', () => {

        it('should remove elements with given indexes', () => {
            input = new StringBuilder('ehoo');
            input.remove(0, 2);
            let actualResult = input.toString();
            let expectedResult = 'oo';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should remove elements with given indexes', () => {
            input = new StringBuilder('pedro');
            input.remove(1, 3);
            let actualResult = input.toString();
            let expectedResult = 'po';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should remove elements with given indexes', () => {
            input = new StringBuilder('bobo');
            input.remove(2, 1);
            let actualResult = input.toString();
            let expectedResult = 'boo';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should return the same element', () => {
            input = new StringBuilder('eqeq');
            input.remove(0, -2);
            let actualResult = input.toString();
            let expectedResult = 'eqeq';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should return the same element', () => {
            input = new StringBuilder('eqq');
            input.remove(1, -1);
            let actualResult = input.toString();
            let expectedResult = 'eqq';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should return the same element', () => {
            input = new StringBuilder('eqq');
            input.remove(0, 0);
            let actualResult = input.toString();
            let expectedResult = 'eqq';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should return the same element', () => {
            input = new StringBuilder('eqq');
            input.remove(1, '');
            let actualResult = input.toString();
            let expectedResult = 'eqq';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should return the same element', () => {
            input = new StringBuilder('eqq');
            input.remove(1, {});
            let actualResult = input.toString();
            let expectedResult = 'eqq';
            assert.deepEqual(actualResult, expectedResult);
        });


    });

    describe('should test the functionality of toString', () => {

        it('should return correct output if the arr is empty', () => {
            let actualResult = input.toString();
            let expectedResult = '';
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should return correct output', () => {
            input = new StringBuilder('haha')
            let actualResult = input.toString();
            let expectedResult = 'haha';
            assert.deepEqual(actualResult, expectedResult);
        });
    });


    describe('test multiply methods', () => {
        it('should give correct output', () => {
            input = new StringBuilder('rank tr');
            input.append('a') //rank trA
            input.prepend('F');//Frank tra
            input.insertAt('Sinarte', 6);//frank sinartetra
            input.remove(10, 3);//Frank Sinatra
            assert.deepEqual(input.toString(), 'Frank Sinatra');
        });

        it('should give correct output', () => {
            input = new StringBuilder('das');
            input.append('fa') //dasfa
            input.prepend('ad');//addasfa
            input.insertAt('f', 2);//adfdasfa
            input.remove(3, 2);//adfsfa
            assert.deepEqual(input.toString(), 'adfsfa');
        });
    });
});