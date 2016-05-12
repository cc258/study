var koa = require('koa'),
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

app.listen(3000);