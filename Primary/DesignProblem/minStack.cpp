#include <vector>

class MinStack
{
  public:
    /** initialize your data structure here. */

    stack<int> myStack;
    vector<int> myVector;

    MinStack()
    {
    }

    void push(int x)
    {
        myStack.push(x);
        myVector.push_back(x);
    }

    void pop()
    {
        myStack.pop();
        myVector.erase(myVector.end());
    }

    int top()
    {
        return myStack.top();
    }

    int getMin()
    {   
        int min=top();
        for (auto it=myVector.begin();it!=myVector.end();it++) {
            if (*it < min) {
                min=*it;
            }
        }

        return min;
    }
    
};