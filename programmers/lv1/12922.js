function solution(n) {
    const arr = Array.from({length:n}, (_,i) => {
        if (i % 2 === 1) return '박';
        else return '수';
    });

    return arr.join('');
}

console.log(solution(4));
