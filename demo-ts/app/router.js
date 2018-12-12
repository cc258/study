
const Home = require('./controller/home');
const router = require('koa-router')();

console.log('---------into router----------');

module.exports = router
    .get('/', Home.index)
    .get('/index', Home.index)
    .get('/app', Home.app);
