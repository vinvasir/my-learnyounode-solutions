var l = process.argv.length;
var sum = 0;

for(i = 2; i < l; i++){
	sum += Number(process.argv[i]);
}

console.log(sum);