const oxQuiz = function (arr) {
    let answer = 0;
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) stack.push(1);
        else {
            stack.map((v, i) => (answer += v * i + 1));
            stack = [];
        }
    }

    return answer;
};

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(oxQuiz(arr));
