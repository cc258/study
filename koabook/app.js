var koa = require('koa'),
	router = require('koa-router'),

	mongoose = require('mongoose'),
	db = require('./db/db'),
	User = require('./db/User'),
	co = require('co'),
	fs = require('fs'),

	xtpl = require('xtpl/lib/koa');

app = koa();
api = router();

app.use(api.routes());

api.get('/',function*(next){
	// add

	var u = new User({
		'uid':12,
		'username':'cc12',
		'creatTime':Date.now(),
		'lastLogin':Date.now()
	})

	// console.log(User.find(u).pretty());
	console.log(this.body);
	this.body = yield User.find();
	console.log(this.body);
});

api.get('/details/:id', function* (next){
	console.log(this.params.id);
	this.body = this.params.id;
});


function read(file){
	return function(fn){
		fs.readFile(file,'utf-8',fn);
	};
}

// co(function *(){
// 	var c = 2;
// 	console.log(c);
// 	var a = yield read('package.json');
// 	console.log(a);
// 	var b = yield read('readme.md');
// 	console.log(b);
// });


xtpl(app,{
	views:'./view'
});

console.log(xtpl);

<<<<<<< HEAD

// app.use(function*(){
//     yield this.render('/index',{title:'1'});
// });

api.get('/index',function *(){
	yield this.render('/index',{'title':'我爱你，你爱我'});
});
=======
api.get('/index',function *(next){
	yield this.html('index',{'title':'我爱你，你爱我'});
})
>>>>>>> 5a82205cf562513c0cffa6192859075f3f564ced

app.context.html = function *(viewName,data){
	if(data){
		// data.nick = '小倩倩';
	}
	yield this.render(viewName,data);
}

app.listen(3000);