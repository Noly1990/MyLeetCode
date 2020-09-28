// 657. 机器人能否返回原点 https://leetcode-cn.com/problems/robot-return-to-origin/

function judgeCircle(moves: string): boolean {
    const splitArr = moves.split('');
    let arr = [0, 0, 0, 0];
    splitArr.forEach(v => {
        switch (v) {
            case 'R':
                arr[0]++
                break;
            case 'L':
                arr[1]++
                break;
            case 'U':
                arr[2]++
                break;
            case 'D':
                arr[3]++
                break;
            default:
                break;
        }
    })

    return arr[0] === arr[1] && arr[2] === arr[3];
};