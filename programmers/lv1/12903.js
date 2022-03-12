function solution(s) {
    const sLen = s.length;

    if (sLen%2 === 1) return s[Math.floor(sLen/2)];
    else  return s.slice((sLen/2)-1,(sLen/2)+1);
}

console.log(solution("qwer"));