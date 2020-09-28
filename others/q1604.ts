// 1604 剑指 Offer 20. 表示数值的字符串 https://leetcode-cn.com/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/
function isNumber(s: string): boolean {
    if (s === null || s.length === 0) return false;
    s = s.trim();
    let reg = /[^0-9eE\.\+\-]/ig;
    if (reg.test(s)) return false;

    let eIndex = s.indexOf('e');

    let e2Index = s.lastIndexOf('e');

    let Eindex = s.indexOf('E');

    let E2index = s.lastIndexOf('E');

    if (eIndex > -1 && Eindex > -1) return false;

    if (eIndex !== e2Index) return false;

    if (Eindex !== E2index) return false;

    let eSplitArr: string[] = [];
    if (eIndex > -1) {
        eSplitArr = s.split('e');
    } else if (Eindex > -1) {
        eSplitArr = s.split('E')
    } else {
        eSplitArr = [s];
    }

    if (eSplitArr.length > 2) return false;

    let reg1 = /^([\+|\-]?)((\.?[0-9]+)|([0-9]+\.?[0-9]*))$/ig

    if (!reg1.test(eSplitArr[0])) return false;

    if (eSplitArr.length === 2) {
        let reg2 = /^[\+|\-]?[0-9]+$/gi
        if (!reg2.test(eSplitArr[1])) return false;
    }

    return true;
};

console.log(isNumber('-.1.1'));

console.log(isNumber('100'));

console.log(isNumber(" 005047e+6"));

console.log(isNumber('-.'));

console.log(isNumber('1.'));

console.log(isNumber('.3'));

console.log(isNumber('+e'));

console.log(isNumber('+e-'));

console.log(isNumber('+100'));

console.log(isNumber('+100a'));

console.log(isNumber('+\100a'));

console.log(isNumber('-1E-16'));

console.log(isNumber('6E6.5'));

console.log(isNumber('2e0'));


function isNumber2(s: string): boolean {

    if (s === null || s.length === 0) return false;
    s = s.trim();
    let reg = /[^0-9eE.\+\-]/ig;
    if (reg.test(s)) return false;

    let eIndex = s.indexOf('e');

    let e2Index = s.lastIndexOf('e');

    let Eindex = s.indexOf('E');

    let E2index = s.lastIndexOf('E');

    if (eIndex > -1 && Eindex > -1) return false;

    if (eIndex !== e2Index) return false;

    if (Eindex !== E2index) return false;

    let eSplitArr: string[] = [];
    if (eIndex > -1) {
        eSplitArr = s.split('e');
    } else if (Eindex > -1) {
        eSplitArr = s.split('E')
    } else {
        eSplitArr = [s];
    }

    if (eSplitArr.length > 2) return false;

    if (eSplitArr[0] === '' || eSplitArr[0].replace(/[\.\+\-]/g, '') === '') return false;

    let plusIndex = eSplitArr[0].indexOf('+');
    let plusIndex2 = eSplitArr[0].lastIndexOf('+');
    if (plusIndex !== plusIndex2) return false;
    if (plusIndex > -1 && plusIndex !== 0) return false;

    let minusIndex = eSplitArr[0].indexOf('-');
    let minusIndex2 = eSplitArr[0].lastIndexOf('-');
    if (minusIndex !== minusIndex2) return false;
    if (minusIndex > -1 && minusIndex !== 0) return false;

    let dotIndex = eSplitArr[0].indexOf('.');
    let dotIndex2 = eSplitArr[0].lastIndexOf('.');
    if (dotIndex !== dotIndex2) return false;


    if (eSplitArr.length === 2) {
        if (eSplitArr[1] === '' || eSplitArr[1].replace(/[\.\+\-]/g, '') === '') return false;
        let plusIndex = eSplitArr[1].indexOf('+');
        let plusIndex2 = eSplitArr[1].lastIndexOf('+');
        if (plusIndex > -1 && plusIndex !== 0) return false;
        if (plusIndex !== plusIndex2) return false;
        let dotIndex = eSplitArr[1].indexOf('.');
        if (dotIndex > -1) return false;
        let minusIndex = eSplitArr[1].indexOf('-');
        let minusIndex2 = eSplitArr[1].lastIndexOf('-');
        if (minusIndex !== minusIndex2) return false;
        if (minusIndex > -1 && minusIndex !== 0) return false;
        if (minusIndex > -1 && eSplitArr[1].length === 1) return false;
    }

    return true;
};
