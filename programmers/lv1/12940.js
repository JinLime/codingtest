// 유클리드 호제법
// function solution(n, m) {
//     const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
//     const lcm = (a, b) => (a * b) / gcd(a, b);
//     return [gcd(n, m), lcm(n, m)];
// }

function solution(n, m) {
    const getGCD = (num1, num2) => {
        let gcd = 1;

        for (let i = 2; i <= Math.min(num1, num2); i++) {
            if (num1 % i === 0 && num2 % i === 0) {
                gcd = i;
            }
        }
        return gcd;
    };

    const getLCM = (num1, num2) => {
        let lcm = 1;

        while (true) {
            if (lcm % num1 == 0 && lcm % num2 == 0) {
                break;
            }
            lcm++;
        }
        return lcm;
    };
    return [getGCD(n, m), getLCM(n, m)];
}

console.log(solution(3, 12));
