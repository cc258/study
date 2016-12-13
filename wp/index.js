'use strict';

let node = {
	loc:{
		start:{
			line: 'ha'.repeat(2),
			column: 5
		}
	}
};

let {loc:{start:{line}}} = node;

let arrayLike = {
	'0':'a',
	'1':'b',
	'2':'c',
	'3':'d',
	length:4
	
};

let arr = Array.from(arrayLike);

function fn(){
	return 'love & hate';
}

arr.forEach(function(p){
	console.log(p);
});

var oo = {
	method(){
		return 'hate';
	}
};

function f(x,y){
	return {x,y};
}

document.getElementById('mid').innerHTML = `
	海上生明月，天涯共此时。
	情人怨遥夜，竟夕起相思。${fn()}
	灭烛怜光满，披衣觉露滋。${line}
	不堪盈手赠，还寝梦佳期。ha
	${Math.sign(-5)},${Math.cbrt(8)}
	${oo.method()}
	${f(2,4).x}
`;
