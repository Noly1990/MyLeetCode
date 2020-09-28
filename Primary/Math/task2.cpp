// 统计所有小于非负整数 n 的质数的数量。

// 示例:

// 输入: 10
// 输出: 4
// 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
#include <iostream>
#include <cmath>
using namespace std;


bool checkPrime(int n)
{
  int sqrtN = ceil(sqrt(n));
  if (n == 2)
  {
    return true;
  }
  for (int i = 2; i <= sqrtN; i++)
  {
    if (n % i == 0)
    {
      return false;
    }
  }
  return true;
}

class Solution
{
public:
  int countPrimes(int n)
  {
    if (n==1) return 0;
    if (n==2) return 0;
    int total = 0;
    for (int i = 2; i < n; i++)
    {
      if (checkPrime(i)) {
        std::cout << "one is ====>" <<  i << '\n';
        total++;
      }
    }
    return total;
  }
};



int main(int argc, char const *argv[])
{
  /* code */
  Solution s1;
  int ten = s1.countPrimes(10);
  std::cout << "10 is " <<  ten << '\n';
  return 0;
}
