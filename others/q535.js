// 535. TinyURL 的加密与解密 https://leetcode-cn.com/problems/encode-and-decode-tinyurl/


const urlMap = new Map();
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    let randomStr;
    while(true) {
        randomStr = Math.random().toString(32).substr(2);
        if (!urlMap.has(randomStr)) {
            urlMap.set(randomStr, longUrl)
            break;
        }
    }
    return `http://tinyurl.com/${randomStr}`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let randomStr = shortUrl.replace('http://tinyurl.com/', '')
    return urlMap.get(randomStr)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

 console.log(encode('https://leetcode.com/problems/design-tinyurl'))