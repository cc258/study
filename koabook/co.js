var co = require('co'),
	fs = require('fs');

function read(file){
	return function(fn){
		fs.readFile(file, 'utf8', fn);
	}
}

co(function* (){

	var b = yield read('package.json');
	console.log(b);
	// console.log(JOSN.stringify(b));
})