const Express = require('express');
const  Router = Express.Router();
const RegisterController = require('../controllers/RegisterController');
const LoginController = require('../controllers/LoginController');
const Auth = require('../midleware/auth');

Router.get('/',(req, res,next)=>{
    res.send('HOla mundo');
})

Router.post('/register',(req, res ,next)=>{
    let userCon = new RegisterController(req, res ,next);
    userCon.register();
})
Router.post('/login',(req, res ,next)=>{
    let userCon = new LoginController(req, res ,next);
    userCon.login();
})

Router.get('/users',Auth,(req, res, next)=>{
    res.send(req.user);
})

module.exports = Router;
