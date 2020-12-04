// 204. 计数质数 https://leetcode-cn.com/problems/count-primes/

function countPrimes(n: number): number {
   let isPrime:boolean[] = new Array(n+1).fill(true);
   isPrime[0] = false;
   isPrime[1] = false;
   for (let i = 2; i * i < n; i++) {
      if (!isPrime[i]) continue;
      for (let j = i * i; j < n; j += i) {
         isPrime[j] = false;
      }
   }
   let count = 0;
   for (let i = 2; i < n; i++) {
      if (isPrime[i]) count++;
   }
   return count;
};