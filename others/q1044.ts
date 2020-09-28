// 1044. 最长重复子串 https://leetcode-cn.com/problems/longest-duplicate-substring/ 

// 滑动窗口对比方法
function longestDupSubstring(S: string): string {
    const len = S.length;
    if (len === 0 || len === 1) return '';
    if (len === 2) return S[0] === S[1] ? S[0] : "";
    let begin = 0;
    let end = 0;
    let k = 1;
    let gap = 1;
    while (k < len && len - k > gap) {
        function findByIndex(index: number) {
            let a = index, b = index;
            let aF = true, bF = true;
            let add = 1;
            while ((aF || bF) && (index - add >= k || index + add < len)) {
                if (aF && index - add >= k && S[index - add] === S[index - add - k]) {
                    a = index - add;
                } else {
                    aF = false;
                }

                if (bF && index + add < len && S[index + add - k] === S[index + add]) {
                    b = index + add + 1;
                } else {
                    bF = false;
                }
                add++;
            }
            return [a, b];
        }

        for (let i = k; i < len; i = i + gap) {
            if (S[i - k] === S[i]) {
                const [a, b] = findByIndex(i);
                if (b - a >= end - begin) {
                    begin = a;
                    end = b;
                    gap = end - begin + 1;
                }
            }
        }
        k++;
    }
    return S.substring(begin, end);
};

function longestDupSubstring2(S: string): string {
    if (S.length === 0 || S.length === 1) return '';
    if (S.length === 2) return S[0] === S[1] ? S[0] : "";
    let begin = 0;
    let end = 0;
    let k = 1;
    let gap = 1;
    while (k < S.length) {
        function findByIndexGap(ii: number) {
            let a = ii, b = ii;
            let t = ii - 1;
            while (t >= k && S[t - k] === S[t]) {
                a = t;
                t--;
            }
            t = ii + 1;
            while (t < S.length && S[t - k] === S[t]) {
                b = t + 1;
                t++;
            }
            return [a, b];
        }

        for (let i = k; i < S.length; i = i + gap) {
            if (S[i - k] === S[i]) {
                const [a, b] = findByIndexGap(i);
                if (b - a >= end - begin) {
                    begin = a;
                    end = b;
                    gap = end - begin + 1;
                }
            }
        }
        if (end - begin === S.length - 1) return S.substring(begin, end);
        k++;
    }
    return S.substring(begin, end);
};

// 经典的暴力子字符串枚举查询，在第十个测试用例就超时。没有优化空间。
// 受到718.最长重复子数组的启发，采用自身k间距滑窗错位对比。
// "banana"
//   "banana"
// 检擦对齐的字符串中是否有相同的字符串，并记录相应的字符串，能够解本题。
// 由于第一版本记录字符串和拼接字符串的操作全部为数组操作。速度感人，且并无优化。
// 在100000长度的测试用例下超时，本机跑12秒左右。
// 后续优化算法，采用记录相同子字符串的下坐标，并将所有操作全部改为计算操作，移除所有数组操作。
// 测试用例超时，但本机时间已明显优化。
// 思考一会，终于发现一个可优化之处，检查对其部分字符串是否相同时，原算法为+1的逐个对比。
// 当发现，当前已记录的最小子字符串长度为100的话，我们在对比相同字符串部分时可采用100为步长去对比。
// 如果存在更长的重复子字符串的话，在步长100的对比处必然有字符是相同的。
// 当该字符相同时再去考虑当前位置前后的相同字符串是否比已经记录的值更大。
// 还有一个优化点，当当前最大子字符串为100时，滑窗部分小于100的后续对比全部可以放弃，因为已经不可能再比100更大。
// 最终通过所有用例，无额外存储，耗时5000ms，打算用c++重写测试下会有多少。
