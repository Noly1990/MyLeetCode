//合并两个有序数组 已通过


#include <vector>

using std::vector;

class Solution {
public:
    void merge(vector<int> &nums1, int m, vector<int> &nums2, int n) {
        if (m == 0)
    {
        nums1 = nums2;
    }
    else if (n == 0)
    {
        //提交的代码没有注意到这里，应该也要擦除多余m的个数
        nums1.erase(nums1.begin() + m, nums1.end());
    }
    else
    {
        int len1 = nums1.size();
        int len2 = nums2.size();

        
        nums2.erase(nums2.begin() + n, nums2.end());

        auto arr1B = nums1.begin();
        auto arr2B = nums2.begin();
        while (arr2B != nums2.end())
        {
            if (*arr2B < *arr1B)
            {
                arr1B = nums1.insert(arr1B, *arr2B);
                arr2B++;
            }
            else
            {
                arr1B++;
                if (arr1B == nums1.end())
                {
                    while (arr2B != nums2.end())
                    {
                        nums1.push_back(*arr2B);
                        arr2B++;
                    }
                }
            }
        }
    }
    }
};