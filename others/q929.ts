// 929 独特的电子邮件地址 https://leetcode-cn.com/problems/unique-email-addresses/

function numUniqueEmails(emails: string[]): number {
    const temp: string[] = [];
    for (const email of emails) {
        const processed = process(email);
        if (temp.indexOf(processed) === -1) {
            temp.push(processed)
        }
    }
    return temp.length;
};


function process(str: string) {
    const strArr = str.split('@');
    const plusIndex = strArr[0].indexOf('+');

    let bf = strArr[0];
    if (plusIndex > -1) {
        bf = strArr[0].substring(0, plusIndex);
    }

    bf = bf.replace(/\./ig, '');

    return `${bf}@${strArr[1]}`
}


console.log(numUniqueEmails(
    ["testemail@leetcode.com", "testemail1@leetcode.com", "testemail+david@lee.tcode.com"]))
console.log(numUniqueEmails(
    ["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]))

