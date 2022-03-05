const solution = (participant, completion) => {
    const parti = new Map();
    for (let x of completion) {
        parti.set(x, parti.get(x) + 1 || 2);
    }

    for (let x of participant) {
        parti.set(x, parti.get(x) - 1 || -1);
        if (parti.get(x) === undefined || parti.get(x) < 0) return x;
    }
};

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));
