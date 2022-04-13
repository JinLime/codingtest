function solution(destn) {
    const result = [];
    const check = Array.from({ length: destn }, (v) => 0);

    function subset(n) {
        if (n === destn + 1) {
            let tmp = "";
            for (let i = 1; i <= n; i++) {
                if (check[i] === 1) tmp += i + " ";
            }
            if (tmp.length > 0) result.push(tmp.trim());
        } else {
            check[n] = 1;
            subset(n + 1);
            check[n] = 0;
            subset(n + 1);
        }
    }
    subset(1);

    return result;
}

console.log(solution(4));
