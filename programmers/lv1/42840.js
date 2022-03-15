function solution(answers) {
    let answer = [];
    let score = 0;
    let soopojaArr = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    for (let i = 0; i < soopojaArr.length; i++) {
        let p1 = 0,
            p2 = 0,
            cnt = 0;

        while (p1 < answers.length) {
            if (p2 === soopojaArr[i].length) p2 = 0;
            if (answers[p1] === soopojaArr[i][p2]) {
                cnt++, p1++, p2++;
            } else p1++, p2++;
        }

        if (cnt > score) {
            answer = [];
            answer.push(i + 1);
            score = cnt;
        } else if (cnt === score) {
            answer.push(i + 1);
            score = cnt;
        }
    }

    return answer;
}

let answers = [
    1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5,
];

console.log(solution(answers));
