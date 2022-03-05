// 소수 판별기
const isPrime = (num) => {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const solution = (nums) => {
    let answer = 0;
    let p1 = 0,
        p2 = 1,
        p3 = 2;

    while (p1 < nums.length - 2) {
        let num = 0;
        num += nums[p1] + nums[p2] + nums[p3++];

        if (isPrime(num)) answer += 1;

        if (p3 >= nums.length) {
            p2 += 1;
            p3 = p2 + 1;
        }
        if (p3 >= nums.length && p2 >= nums.length - 1) {
            p1 += 1;
            p2 = p1 + 1;
            p3 = p2 + 1;
        }
    }

    return answer;
};

let nums = [1, 2, 3, 4];

console.log(solution(nums));
