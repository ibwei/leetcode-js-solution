/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @solution 先把 pattern 拆成数组，然后将 str 也以空格分隔符拆成数组
 * 然后判断pattern 是哪种。然后依次暴力对比。
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const patternList = pattern.split('')
  const wordList = s.split(' ')
  // 先判断个数对不对
  if (patternList.length !== wordList.length) {
    return false
  }
  // 如果完全匹配，则出现元素一定相等
  const noDuplicatePattern = Array.of(...new Set(patternList))
  const noDuplicateWord = Array.of(...new Set(wordList))
  if (noDuplicatePattern.length !== noDuplicateWord.length) {
    return false
  }
  // 为每个正确 pattern 字符赋对应的值
  const correntKeyList = {}
  for (let i = 0; i < noDuplicateWord.length; i++) {
    correntKeyList[noDuplicatePattern[i]] = noDuplicateWord[i]
  }
  // 开始验证
  for (let i = 0; i < patternList.length; i++) {
    if (wordList[i] !== correntKeyList[patternList[i]]) {
      return false
    }
  }
  return true
}
// @lc code=end

/*
  other solution
  var wordPattern1 = function (pattern, s) {
  let arrS = s.match(/\w+/g);
  let len = arrS.length;
  console.log(arrS);
  if (pattern.length != arrS.length) return false;
  let numPa = '',
    numS = '';
  for (let i = 0; i < len; i++) {
    numS += arrS.indexOf(arrS[i]);

    numPa += pattern.indexOf(pattern[i]);
    console.log(numS, numPa);
  }
  return numS == numPa;
}; */

// console.log(wordPattern1('abba', 'dog cat cat dog'));
