function solution(n, lost, reserve) {
    let answer = n - lost.length;
    let i = 0;

    lost.sort((a,b) => a - b);
    reserve.sort((a, b) => a - b);
    
    while (i < lost.length) {
        let n = lost[i];
        if (reserve.includes(n)) {
            reserve.splice(reserve.indexOf(n),1);
            answer++;
        }
        else if (reserve.includes(n-1)) {
            reserve.splice(reserve.indexOf(n-1),1);
            answer++;
        }
        else if (reserve.includes(n+1) && !lost.includes(n+1)) {
            reserve.splice(reserve.indexOf(n+1),1);
            answer++;
        }
        i++;
    }

    return answer;
}

let n = 10;
let lost = [1,3,4];
let reserve = [4,5];

console.log(solution(n, lost, reserve));