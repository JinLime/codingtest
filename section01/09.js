const AtoHash = function (arr) {
    // answer = arr.replace(/A/g, "#");

    let answer = "";
    for (let i of arr) {
        if (i === "A") answer += "#";
        else answer += i;
    }

    return answer;
};

let arr = "BANANA";

console.log(AtoHash(arr));
