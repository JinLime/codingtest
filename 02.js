const isTriangle = function (a, b, c) {
    let answer = "YES",
        max;
    let sum = a + b + c;

    if (a > b) max = a;
    else max = b;

    if (max < c) max = c;

    if (sum - max < max) answer = "NO";

    return answer;
};

console.log(isTriangle(6, 6, 6));
console.log(isTriangle(13, 33, 17));
