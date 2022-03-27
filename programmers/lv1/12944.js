function solution(arr) {
    return arr.reduce((v,i) => v+i)/arr.length
}

console.log(solution([1, 2, 3, 4]));
