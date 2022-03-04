function curriculumPlan(need, plan) {
    let result = "YES";
    let queue = need.split("");

    for (let x of plan) {
        if (queue.includes(x)) {
            if (x !== queue.shift()) return "NO";
        }
    }
    if (queue.length > 0) return "NO";

    return result;
}

let requiredSubject = "CBA";
let subject = "CBDAGE";

console.log(curriculumPlan(requiredSubject, subject));
