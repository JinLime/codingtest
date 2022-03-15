function solution(s) {
    let pCnt = 0,
        yCnt = 0;
    s = s.toLowerCase();

    for (let x of s) {
        if (x === "p") pCnt++;
        else if (x === "y") yCnt++;
    }

    return pCnt === yCnt ? true : false;
}

console.log(solution("poooyY"));
