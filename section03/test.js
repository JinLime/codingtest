let str = "gooddsG";

for (let i = 0; i < str.length; i++) {
    console.log(
        `앞에서부터 : ${str.slice(i, i + 1)}, 뒤에서부터 : ${str.slice(-1 - i, str.length - i)}`,
    );
}

console.log(str);
