/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const map = new Map()

  for (let i = 0; s[i]; ++i) {
    if (map.has(s[i])) {
      map.set(s[i], { occurrences: map.get(s[i]).occurrences + 1, index: map.get(s[i]).index })
    } else {
      map.set(s[i], { occurrences: 1, index: i })
    }
  }

  for (const [key, val] of map) {
    if (val.occurrences === 1) {
      return val.index
    }
  }

  return -1
}
