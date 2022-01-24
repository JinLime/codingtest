const minNumber = function (a, b, c) {
    let answer;
    if (a < b) answer = a;
    else answer = b;

    if (c < answer) answer = c;

    return answer;
};

console.log(minNumber(2, 5, 1));
