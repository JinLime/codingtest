function solution(s) {
    // 숫자가 아닌 값이 한 개 이상 들어가면 true
    const optionNum = /\D/g;

    // !optionNum.test() 숫자가 아닌 값이 한 개 이상 들어가면 false
    return (s.length === 4 || s.length === 6) && !isNaN(s) && !optionNum.test(s) ? true : false;
}

console.log(solution("1234"));
