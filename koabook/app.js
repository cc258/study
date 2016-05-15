var koa = require('koa'),
<<<<<<< HEAD
	app = koa(),
	router = require('koa-router'),
	api = router();

app.use(api.routes());

api.get('/',function*(){
	this.body = 'hello koa';
});

api.get('/details/:id',function*(next){
	this.body = this.params.id;
});

=======
	router = require('koa-router'),
	co = require('co'),
	fs = require('fs'),

	xtpl = require('xtpl/lib/koa');

app = koa();
api = router();

app.use(api.routes());

api.get('/',function(res){
	this.body = '123';
});

api.get('/details/:id',function *(next){

	this.body = this.params.id;
});


function read(file){
	return function(fn){
		fs.readFile(file,'utf-8',fn);
	}
}

co(function *(){
	var c = 2;
	console.log(c);
	var a = yield read('package.json');
	console.log(a);
	var b = yield read('readme.md');
	console.log(b);
})


xtpl(app,{
	views:'./view'
});

console.log(xtpl);


// app.use(function*(){
//     yield this.render('index',{title:'1'});
// });

api.get('/index',function *(next){
	yield this.render('index',{'title':'我爱你，你爱我'});
})




>>>>>>> e4ba0417401facb24706df629d736e395ebb9a7f
app.listen(3000);