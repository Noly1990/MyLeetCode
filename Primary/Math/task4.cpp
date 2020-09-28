// 罗马数字包含以下七种字符：I， V， X， L，C，D 和 M。
// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

//     I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
//     X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
//     C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
// 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

// 示例 1:
// 输入: "III"
// 输出: 3


class Solution {
public:
    int romanToInt(string s) {
        int firstStep(string &s);
    int secondStep(string &s);
    int total1 =0;
    total1= firstStep(s);
    int total2 =0;
    total2= secondStep(s);
      return total1+total2;
    }
};

int firstStep(string &s)
{
    int sum = 0;
    const string str[6] = {"IV", "IX", "XL", "XC", "CD", "CM"};
    const int arr[6] = {4, 9, 40, 90, 400, 900};
    for (int i = 0; i < 6; i++)
    {
        if (s.find(str[i]) != string::npos)
        {   
            s.replace(s.find(str[i]),2,"AA");
            sum += arr[i];
        }
    }
    return sum;
}

int secondStep(string &s)
{
    int sum = 0;
    char str[7] = {'I', 'V', 'X', 'L', 'C', 'D', 'M'};
    const int arr[7] = {1, 5, 10, 50, 100, 500,1000};
    auto sBegin=s.begin();
    auto sEnd=s.end();
    while (sBegin!=sEnd) {
        for (int i = 0; i < 7; i++)
        {
            if (*sBegin==str[i]) {
                sum += arr[i];
            }
        }
        sBegin++;
    }
    return sum;
}