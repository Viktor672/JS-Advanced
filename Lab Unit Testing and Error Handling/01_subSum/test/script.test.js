import { assert } from 'chai';
import { subSum } from "../script.js";
describe("test the function susSum", () => {
    it("should calculate the sum of arr", () => {
        let arr = [10, 20, 30, 40, 50, 60];
        let startIndex = 3;
        let endIndex = 300;
        let actualResult = subSum(arr, startIndex, endIndex);
        let expectedResult = 150;
        assert.equal(actualResult, expectedResult);
    })

    it("should calculate the sum of arr", () => {
        let arr = [1.1, 2.2, 3.3, 4.4, 5.5];
        let startIndex = -3;
        let endIndex = 1;
        let actualResult = subSum(arr, startIndex, endIndex);
        let expectedResult = 3.3;
        assert.equal(actualResult, expectedResult);
    })

    it("should return NaN", () => {
        let arr = [10, 'twenty', 30, 40];
        let startIndex = 0;
        let endIndex = 2;
        let actualResult = subSum(arr, startIndex, endIndex);
        assert.isNaN(actualResult);
    })

    it("should return 0", () => {
        let arr = [];
        let startIndex = 1;
        let endIndex = 2;
        let actualResult = subSum(arr, startIndex, endIndex);
        let expectedResult = 0;
        assert.equal(actualResult, expectedResult);
    })

    it("should return NaN", () => {
        let arr = 'text';
        let startIndex = 0;
        let endIndex = 2;
        let actualResult = subSum(arr, startIndex, endIndex);
        assert.isNaN(actualResult);
    })
});