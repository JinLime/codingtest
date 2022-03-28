function solution(phone_number) {
    // const numLen = phone_number.slice(0,-4);
    // return '*'.repeat(numLen.length) + phone_number.slice(-4);

    // 정규식
    return phone_number.replace(/\d(?=\d{4})/g, "*");
}

console.log(solution("01033334444"));

