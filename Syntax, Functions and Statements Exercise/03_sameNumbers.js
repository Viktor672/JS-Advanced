function sameNumbers(num) {
    num = String(num);
    let isEqual = true;
    let sum = 0;
    oldNum = num[0];
    for (const curNum of num) {
        if (curNum != oldNum) {
            isEqual = false;
        }
        oldNum = curNum;
        sum += Number(curNum);
    }
    console.log(isEqual);
    console.log(sum);
}
sameNumbers(1234);