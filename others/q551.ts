// 551. 学生出勤记录 I https://leetcode-cn.com/problems/student-attendance-record-i/

function checkRecord(s: string): boolean {
    let indexLLL = s.indexOf("LLL");
    if (indexLLL > -1) return false;
    let indexA = s.indexOf('A');
    if (indexA > -1) {
        let indexA2 = s.indexOf('A', indexA + 1);
        if (indexA2 > -1) return false;
        return true;
    }
    return true;
};