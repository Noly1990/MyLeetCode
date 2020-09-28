// 899. 有序队列 https://leetcode-cn.com/problems/orderly-queue/

function orderlyQueue(S: string, K: number): string {
    if (K > 1) return S.split('').sort().join('');
    let minIndex = 0;
    for (let i=0;i<S.length;i++) {
        if ((S.substring(i) + S.substring(0, i))< (S.substring(minIndex) + S.substring(0, minIndex))) {
            minIndex = i;
        }
    }
    return S.substring(minIndex) + S.substring(0, minIndex)
};

console.log(orderlyQueue("xitavoyjqiupzadbdyymyvuteolyeerecnuptghlzsynozeuuvteryojyokpufanyrqqmtgxhyycltlnusyeyyqygwupcaagtkuq", 1))