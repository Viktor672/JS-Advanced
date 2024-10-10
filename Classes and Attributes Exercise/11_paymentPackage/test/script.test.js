import { assert } from 'chai';
import { PaymentPackage } from '../script.js';

describe('test the functionality of the task', () => {
    let result;
    beforeEach(() => {
        result = new PaymentPackage('Package', 150);
    })
    describe('test the functionality of PaymentPackage', () => {

        it('should give correct output ', () => {
            assert.deepEqual(result.name, 'Package');
        });

        it('should give correct output ', () => {
            assert.deepEqual(result.value, 150);
        });


        it('should give correct output ', () => {
            assert.deepEqual(result.VAT, 20);
        });

        it('should give correct output ', () => {
            assert.deepEqual(result.active, true);
        });

    });

    describe('test the functionality of name and value', () => {

        it('should throw an error', () => {
            assert.throws(() => new PaymentPackage('', 25), Error, 'Name must be a non-empty string');
        });

        it('should throw an error', () => {
            assert.throws(() => new PaymentPackage(52, 25), Error, 'Name must be a non-empty string');
        });

        it('should throw an error', () => {
            assert.throws(() => new PaymentPackage('', 25), Error, 'Name must be a non-empty string');
        });

        it('should throw an error', () => {
            assert.throws(() => new PaymentPackage('rad', -25), Error, 'Value must be a non-negative number');
        });

        it('should throw an error', () => {
            assert.throws(() => new PaymentPackage('rre', 'req'), Error, 'Value must be a non-negative number');
        });

    });

    describe('test the functionality of name', () => {
        it('should be valid', () => {
            result.name = 'Updated Package';
            assert.deepEqual(result.name, 'Updated Package');
        });

        it('should throw an error', () => {
            result.name = 'Updated Package';
            assert.throws(() => result.name = '', Error, 'Name must be a non-empty string');
        });

        it('should throw an error', () => {
            result.name = 'Updated Package';
            assert.throws(() => result.name = 33, Error, 'Name must be a non-empty string');
        });
    });

    describe('test the functionality of value', () => {
        it('should be valid', () => {
            result.value = 185;
            assert.deepEqual(result.value, 185);
        });

        it('should be valid', () => {
            result.value = 0;
            assert.deepEqual(result.value, 0);
        });

        it('should throw an error', () => {
            result.value = 185;
            assert.throws(() => result.value = -124, Error, 'Value must be a non-negative number');
        });

        it('should throw an error', () => {
            result.value = 185;
            assert.throws(() => result.value = 'trq', Error, 'Value must be a non-negative number');
        });
    });

    describe('test the functionality of VAT', () => {
        it('should return correct output', () => {
            result.VAT = 17;
            assert.deepEqual(result.VAT, 17);
        });

        it('should return correct output', () => {
            result.VAT = 0;
            assert.deepEqual(result.VAT, 0);
        });

        it('should throw an error', () => {
            result.VAT = 17;
            assert.throws(() => result.VAT = -113, Error, 'VAT must be a non-negative number');
        });

        it('should throw an error', () => {
            result.VAT = 17;
            assert.throws(() => result.VAT = 'khj', Error, 'VAT must be a non-negative number');
        });
    });

    describe('test the functionality of active', () => {
        it('should return correct output', () => {
            result.active = false;
            assert.deepEqual(result.active, false);
        });

        it('should throw an error', () => {
            result.active = false;
            assert.throws(() => result.active = '', Error, 'Active status must be a boolean'); //possible error
        });
    });

    describe('test the functionality of active', () => {
        it('should return correct output when active is true', () => {
            result.active = true;
            let actualResult = result.toString();
            let expectedResult = `Package: Package\n- Value (excl. VAT): 150\n- Value (VAT 20%): 180`;
            assert.deepEqual(actualResult, expectedResult);
        });

        it('should return correct output when active is false', () => {
            result.active = false;
            let actualResult = result.toString();
            let expectedResult = `Package: Package (inactive)\n- Value (excl. VAT): 150\n- Value (VAT 20%): 180`;
            assert.deepEqual(actualResult, expectedResult);
        });
    });
});