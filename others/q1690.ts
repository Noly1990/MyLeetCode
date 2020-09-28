//  1690 面试题 17.13. 恢复空格 https://leetcode-cn.com/problems/re-space-lcci/

function respace(dictionary: string[], sentence: string): number {
    if (dictionary.length === 0) return sentence.length;
    if (sentence.length === 0) return 0;
    if (dictionary.indexOf(sentence) > -1) return 0;
    const dp: number[] = new Array(sentence.length + 1).fill(0);
    dp[0] = 0;
    for (let i=1;i<=sentence.length;i++) {
        dp[i] = dp[i-1] + 1;
        for (const word of dictionary) {
            const len = word.length;
            if (i >= len) {
                if (sentence.substr(i - len, len) === word) {
                    dp[i] = Math.min(dp[i], dp[i-len]);
                    
                }
            }
        }
    }
    return dp[sentence.length]
};


console.log(respace(["looked", "just", "like", "her", "brother"], "jesslookedjustliketimherbrother")) // 7

console.log(respace(["jxnonurhhuanyuqahjy", "phrxu", "hjunypnyhajaaqhxduu"], "qahurhoharrdjxnonurhhuanyuqahjyppnha")) // 17

console.log(respace(["vprkj", "sqvuzjz", "ptkrqrkussszzprkqrjrtzzvrkrrrskkrrursqdqpp", "spqzqtrqs", "rkktkruzsjkrzqq", "rk", "k", "zkvdzqrzpkrukdqrqjzkrqrzzkkrr", "pzpstvqzrzprqkkkd", "jvutvjtktqvvdkzujkq", "r", "pspkr", "tdkkktdsrkzpzpuzvszzzzdjj", "zk", "pqkjkzpvdpktzskdkvzjkkj", "sr", "zqjkzksvkvvrsjrjkkjkztrpuzrqrqvvpkutqkrrqpzu"],
    "rkktkruzsjkrzqqzkvdzqrzpkrukdqrqjzkrqrzzkkrr")) // 0

console.log(respace(["aaysaayayaasyya", "yyas", "yayysaaayasasssy", "yaasassssssayaassyaayaayaasssasysssaaayysaaasaysyaasaaaaaasayaayayysasaaaa", "aya", "sya", "ysasasy", "syaaaa", "aaaas", "ysa", "a", "aasyaaassyaayaayaasyayaa", "ssaayayyssyaayyysyayaasaaa", "aya", "aaasaay", "aaaa", "ayyyayssaasasysaasaaayassasysaaayaassyysyaysaayyasayaaysyyaasasasaayyasasyaaaasysasy", "aaasa", "ysayssyasyyaaasyaaaayaaaaaaaaassaaa", "aasayaaaayssayyaayaaaaayaaays", "s"], "asasayaayaassayyayyyyssyaassasaysaaysaayaaaaysyaaaa"))


