let arr = [5, 6, 7, 4, 5];

let answer = arr.slice(0, 3).reduce((a, b) => {
    return a + b;
}, 0);

console.log(answer);
