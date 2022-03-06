function solution(d, budget) {
    let result = d.length;
    let dSum = d.reduce((v, i) => v + i);

    if (budget >= dSum) return result;

    d.sort((a, b) => b - a);

    for (let x of d) {
        dSum -= x;
        if (dSum <= budget) {
            result--;
            return result;
        } else result--;
    }
}

const d = [1, 3, 2, 5, 4];

console.log(solution(d, 9));
