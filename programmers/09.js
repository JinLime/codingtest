let a = [10,11,12,13];

a.reduce((v,i,d) => {

    console.log(v,i,d);
    return v, i;
})