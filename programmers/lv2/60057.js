function division(a, n) {
    let result = [];
    for (i = 0; i < a.length; i += n) {
        result.push(a.slice(i, i + n));
    }
    return result;
}

function solution(s) {
    let cnt = 1;
    let cntA = 1;
    let sArr = s.split("");
    let arr;

    while (cnt <= s.length) {
        const c = [];
        arr = division(sArr, cnt);
        console.log(arr);

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].toString() === arr[i + 1].toString()) cntA++;
            else if (arr[i].toString() !== arr[i + 1].toString() && cntA > 1) {
                c.push(cntA);
                c.push(arr[i]);
                cnt = 1;
            }
        }
        console.log(c);
        cnt++;
    }
}

console.log(solution("aabbaccc"));

// let a = [
//     ["a", "b"],
//     ["a", "c"],
// ];
// console.log(a[0].toString() === a[1].toString());
