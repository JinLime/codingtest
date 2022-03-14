function strBig(a, b) {
    return (a > b) - (a < b);
}

const solution = (strings, n) => {
    return strings.sort((a,b) => {
        const first = a[n];
        const second = b[n];
        return (first === second) ? strBig(a, b) : strBig(first, second);
    });
};

console.log(solution(["abce", "abcd", "cdx"], 2));
