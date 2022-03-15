function solution(new_id) {
    let answer = new_id
        .toLowerCase()
        .replace(/[^a-z0-9\._-]/g, "")
        .replace(/[.]+/g, ".")
        .replace(/^[.]|[.]$/g, "")
        .replace(/^$/g, "a") // ^$ = 빈문자열
        .slice(0, 15)
        .replace(/[.]$/g, "");

    if (answer.length <= 2) {
        for (let i = 0; i <= 3 - answer.length; i++) {
            answer = answer.concat(answer[answer.length - 1]);
        }
    }

    return answer;
}

let new_id = "=.=";

console.log(solution(new_id));
