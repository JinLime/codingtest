const classPresident = (arr) => {
    let answer = "";
    let sum = 0;
    let voteArr = arr.split("");

    let counts = new Map();
    for (let x of voteArr) {
        counts.set(x, counts.get(x) + 1 || 1);
    }

    for (let x of counts.entries()) {
        if (x[1] > sum) {
            sum = x[1];
            answer = x[0];
        }
    }
    return answer;
};

arr = "BACBACCACCBDEDE";

console.log(classPresident(arr));
