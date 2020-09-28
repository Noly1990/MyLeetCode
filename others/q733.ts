// 733. 图像渲染 https://leetcode-cn.com/problems/flood-fill/



// [2,2,2],
// [2,2,0],
// [2,0,1]]


function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    let lenX = image.length;
    let lenY = image[0].length;
    let old = image[sr][sc];
    if (old === newColor) {
        return image;
    }
    function paint(x: number, y: number) {
        image[x][y] = newColor;
        if (x + 1 <= lenX - 1 && image[x + 1][y] === old) {
            paint(x + 1, y);
        }
        if (y + 1 <= lenY - 1 && image[x][y + 1] === old) {
            paint(x, y + 1);
        }

        if (x - 1 >= 0 && image[x - 1][y] === old) {
            paint(x - 1, y);
        }

        if (y - 1 >= 0 && image[x][y - 1] === old) {
            paint(x, y - 1);
        }
    }

    paint(sr, sc);

    return image;
};


console.log(floodFill([[1, 1, 1],
[1, 1, 0],
[1, 0, 1]], 1, 1, 2))

console.log(floodFill([[0,0,0],[0,1,1]],
    1,
    1,
    1))