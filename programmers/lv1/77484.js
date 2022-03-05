function solution(lottos, win_nums) {
    let answer = [];
    let rank = 7, cntZero = 0;

    for (let x of lottos) {
        if (x === 0) cntZero += 1;
        if (win_nums.indexOf(x) !== -1) rank -= 1;
    }

    if (rank === 7) rank -= 1;
    if (cntZero === 6) cntZero -= 1;

    answer.push(rank - cntZero);
    answer.push(rank);

    return answer;
}

let lottos = [0, 0, 0, 0, 0, 0];
let win_nums = [38, 19, 20, 40, 15, 25];

console.log(solution(lottos, win_nums));