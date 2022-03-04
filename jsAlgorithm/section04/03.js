const mentoring = (test) => {
    let answer = 0;
    let m = test.length; // m = 3
    let n = test[0].length; // n = 4

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let cnt = 0;
            for (let k = 0; k < m; k++) {
                let pi = 0, pj = 0;
                for (let s = 0; s < n; s++) {
                    if(test[k][s] === i) pi = s;
                    if(test[k][s] === j) pj = s;
                }
                if(pi < pj) cnt += 1;
            }
            if(cnt === m) answer += 1;
        }
    }

    return answer;
}

let arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];

console.log(mentoring(arr));

/*
const mentoring = (test) => {
    let result = 0;
    let mentoObj = {};
    let temp = []
    let m = test.length;
    let n = test[0].length; // n = 4

    for (let x of test) {
        let couple = x.toString().split(',');
        for(let i = 0; i < n-1; i++) {
            for (let j = i + 1; j < n; j++) {
                temp.push(couple[i]+couple[j]);
            }
        }
    }

    temp.forEach(x => {
        mentoObj[x] = (mentoObj[x] || 0) + 1;
    });

    for (let x in mentoObj) {
        if (mentoObj[x] === m) {
            result += 1;
        }
    }

    return result;
}

let arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2],[1, 4, 2, 3]];

console.log(mentoring(arr));
*/