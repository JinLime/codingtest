const reversePrimeNum = (arr) => {
    let answer = [];

    // 소수 판별기
    const isPrime = num => {
        if (num === 1) return false;
        for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let x of arr) {
        let res = 0;
        res = parseInt(x.toString().split('').reverse().join(''));
    
        if (isPrime(res)) answer.push(res);
        
    }

    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(reversePrimeNum(arr));