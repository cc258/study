
// const Home = require('./controller/home');
import Home from './controller/home';

module.exports = app => {

    app.get('/', Home.index);
    console.log(Home);

    app.get('/application', Home.application);
    console.log('-------------------');


}