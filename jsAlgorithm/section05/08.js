const compareMaps = (map1, map2) => {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
}

const anagramAll = (s, t) => {
    let answer = 0;
    let tH = new Map();
    let sH = new Map();
    let lt = 0;

    for (let x of t) {
        tH.set(x, tH.get(x) + 1 || 1);
    }
    
    let len = t.length - 1;
    for (let i = 0; i<len; i++) {
        sH.set(s[i], sH.get(s[i]) + 1 || 1);
    }
    
    for (let rt = len; rt < s.length; rt++) {
        sH.set(s[rt], sH.get(s[rt]) + 1 || 1);
        if (compareMaps(sH, tH)) answer++;
        sH.set(s[lt], sH.get(s[lt]) - 1);
        if(sH.get(s[lt]) === 0) sH.delete(s[lt]);
        lt++;
    }

    return answer;
};

let s = "bacaAacba";
let t = "abc";

console.log(anagramAll(s, t));
