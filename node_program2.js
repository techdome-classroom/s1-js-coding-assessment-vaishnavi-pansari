const decodeTheRing = function (s, p) {
        let i = 0; // message index
        let j = 0; // pattern index
      
        while (i < s.length && j < p.length) {
          if (pattern[j] === '*') {
            // star symbol, skip to next pattern character
            j++;
          } else if (p[j] === '?') {
            // question mark, match any single letter
            i++;
            j++;
          } else if (s[i] === p[j]) {
            // exact match, move to next characters
            i++;
            j++;
          } else {
            // no match, return false
            return false;
          }
        }
      
        // check if we've reached the end of both strings
        return i === s.length && j === p.length;
      }

  
  
 

