// 860. 柠檬水找零 https://leetcode-cn.com/problems/lemonade-change/ 

function lemonadeChange(bills: number[]): boolean {
    if (bills.length === 0) return true;
    let fiveCount = 0;
    let tenCount = 0;
    for (let v of bills) {
        switch (v) {
            case 5:
                fiveCount++;
                break;
            case 10:
                if (fiveCount===0) return false;
                fiveCount--;
                tenCount++;
                break;
            case 20:
                if (fiveCount===0) return false;
                if (tenCount>= 1) {
                    tenCount--;
                    fiveCount--;
                } else if (tenCount === 0) {
                    if (fiveCount<3) return false;
                    fiveCount -= 3;
                }
                break;
            default:
                break;
        }
    }
    return true;
};