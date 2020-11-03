// 1024. 视频拼接 https://leetcode-cn.com/problems/video-stitching/

function videoStitching(clips: number[][], T: number): number {
    let dp = new Array(T + 1).fill([]).map(() => new Array(T + 1).fill(-1));
    clips.forEach(p => {
        let [x, y] = p;
        if (y > T) y = T;
        for (let i = x; i <= y; i++) {
            for (let j = i; j <= y; j++) {
                dp[i][j] = 1;
            }
        }
    })

    for (let space = 1; space <= T; space++) {
        for (let j = 0; j < T; j++) {
            if (dp[j][j + space] !== -1) continue;
            let temp = []
            for (let k = 1; k < space; k++) {
                if (dp[j][j+k] !== -1 && dp[j + k][j + space] !== -1) {
                    temp.push(dp[j][j+k] + dp[j + k][j + space])
                }
            }
            if (temp.length === 0) dp[j][j + space] = -1
            else dp[j][j + space] = Math.min(...temp);
        }
    }
    return dp[0][T]

    // dp[x][y] 代表从x到y需要多少
};

console.log(videoStitching([[0, 1], [6, 8], [0, 2], [5, 6], [0, 4], [0, 3], [6, 7], [1, 3], [4, 7], [1, 4], [2, 5], [2, 6], [3, 4], [4, 5], [5, 7], [6, 9]], 9))

console.log(videoStitching([[0, 2], [4, 6], [8, 10], [1, 9], [1, 5], [5, 9]], 10))

console.log(videoStitching([[0,2],[4,8]], 5))