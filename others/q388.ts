// 388. 文件的最长绝对路径  https://leetcode-cn.com/problems/longest-absolute-file-path/

function lengthLongestPath(input: string): number {
    let theMaxPath = '';
    let pathArr: string[] = []
    const splitArr = input.split('\n');
    for (let i = 0; i < splitArr.length; i++) {
        let res: [number, string] = pureStr(splitArr[i]);
        pathArr[res[0]] = res[1];
        pathArr = pathArr.slice(0, res[0] + 1)
        if (isFile(res[1])) {
            let temp = pathArr.join('/');
            if (temp.length > theMaxPath.length) {
                theMaxPath = temp;
            }
        }
    }
    return theMaxPath.length;
};

function isFile(str: string) {
    return str.indexOf('.') > -1
}

function pureStr(str: string): [number, string] {
    let index: number = 0;
    let tNum = 0;
    while (true) {
        if (str.substr(index, 1) === '\t') {
            tNum++;
            index++;
        } else {
            break;
        }
    }
    return [tNum, str.substring(index)];
}

console.log(lengthLongestPath(
    "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext\n\t\t\tfile3.ext"
))

console.log(lengthLongestPath("a\n\taa\n\t\taaa\n\t\t\tfile1.txt\naaaaaaaaaaaaaaaaaaaaa\n\tsth.png"))