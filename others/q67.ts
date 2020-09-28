// 67 二进制求和 https://leetcode-cn.com/problems/add-binary/

function addBinary(a: string, b: string): string {
    const maxL = Math.max(a.length, b.length);
    const rA = a.split("").reverse().join("");
    const rB = b.split("").reverse().join("");
    const temp = [];
    let before = false;
    for (let i = 0; i < maxL; i++) {
        if (rA[i] === '0' && rB[i] === '0') {
            temp.push(before ? '1' : '0');
            before = false;
        } else if (rA[i] === '1' && rB[i] === '0') {
            temp.push(before ? '0' : '1');
        } else if (rA[i] === '0' && rB[i] === '1') {
            temp.push(before ? '0' : '1');
        } else if (rA[i] === '1' && rB[i] === '1') {
            temp.push(before ? '1' : '0');
            before = true;
        } else if (rA[i] === undefined && rB[i] === '0') {
            temp.push(before ? '1' : '0');
            before = false;
        } else if (rA[i] === '0' && rB[i] === undefined) {
            temp.push(before ? '1' : '0');
            before = false;
        } else if (rA[i] === '1' && rB[i] === undefined) {
            temp.push(before ? '0' : '1');
        } else if (rA[i] === undefined && rB[i] === '1') {
            temp.push(before ? '0' : '1');
        } else if (rA[i] === undefined && rB[i] === undefined && before) {
            temp.push('1')
            before = false;
        }
    }

    return temp.reverse().join('');
};

console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));


110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000
110110100110111111110110001101000111001110000010011101011111100110011000010000110001010011000110000