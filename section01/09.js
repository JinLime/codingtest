const AtoHash = function (str) {
    // answer = str.replace(/A/g, "#");

    let answer = "";
    for (let i of str) {
        if (i === "A") answer += "#";
        else answer += i;
    }

    return answer;
};

let str = "BANANA";

console.log(AtoHash(str));
