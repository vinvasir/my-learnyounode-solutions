// console.log(process.argv.length);

var l = process.argv.length;

// console.log(l);

for(i = 2; i < l; i++){
	console.log(Number(process.argv[i]) + "\n");
}

// console.log(process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);