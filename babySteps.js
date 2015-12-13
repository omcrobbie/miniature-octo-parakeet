var sum = process.argv.filter((a,b) => b > 1 ).reduce((c,d)=> +c + +d);
console.log(sum);
