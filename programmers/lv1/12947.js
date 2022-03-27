function solution(arr) {
    const arrSum = Array.from(String(arr), Number).reduce((v,i) => v+i);
    return arr % arrSum === 0 ? true : false;
}

console.log(solution(10));
