process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    const line = "*".repeat(a);
    const rect = (line + "\n").repeat(b);
    console.log(rect);
});
