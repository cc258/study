var koa = require('koa'),
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

api.get('/index',function *(next){
	yield this.html('index',{'title':'我爱你，你爱我'});
})

app.context.html = function *(viewName,data){
	if(data){
		// data.nick = '小倩倩';
	}
	yield this.render(viewName,data);
}

app.listen(3000);