function solution(numbers) {
    let result = [];
    let p1 = 0, p2 = 1;

    while (p1 < numbers.length-1) {
        let p1PlusP2 = numbers[p1] + numbers[p2++];
        console.log(p1PlusP2);
        if (!result.includes(p1PlusP2)) result.push(p1PlusP2);
        if (p2 >= numbers.length) {
            p1++;
            p2 = p1+1;
        }
    }

    return result.sort((a,b) => a - b);
}

let numbers = [2,1,3,4,1];

console.log(solution(numbers));