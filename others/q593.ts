// 593. 有效的正方形 https://leetcode-cn.com/problems/valid-square/

function validSquare(p1: number[], p2: number[], p3: number[], p4: number[]): boolean {
    return validTre(p1,p2,p3) && validTre(p1,p2,p4) && validTre(p2,p3,p4) && validTre(p1,p3,p4);
};

// 任意三个点必定是等腰直角三角形，且边长不为0
function validTre(p1: number[], p2: number[], p3: number[]) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    const [x3, y3] = p3;
    const line1 = (x2 - x1) ** 2 + (y2 - y1) ** 2;
    const line2 = (x3 - x2) ** 2 + (y3 - y2) ** 2;
    const line3 = (x3 - x1) ** 2 + (y3 - y1) ** 2;
    if (line1 > 0 && line2 > 0 && line3 > 0) {
        if (line1 === line2) {
            return line1 + line2 === line3;
        } else if (line1 === line3) {
            return line1 + line3 === line2;
        } else if (line2 === line3) {
            return line2 + line3 === line1;
        }
    }
    return false;
}