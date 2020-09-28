#include <iostream>
#include <bitset>

using namespace std;

class Solution
{
public:
  uint32_t reverseBits(uint32_t n)
  {
    std::bitset<32u> temp = bitset<32>(n);
    std::bitset<32u> newTemp;
    for (int i = 0; i < 32; i++)
    {
      newTemp[31 - i] = temp[i];
    }
    uint32_t newInt = newTemp.to_ulong();
    return newInt;
  }
};

int main(int argc, char const *argv[])
{
  Solution s;
  s.reverseBits(43261596);
  std::cout << "/* message */" << s.reverseBits(43261596) << '\n';
  return 0;
}
