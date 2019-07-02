const Controller = require('./Controller');
const UserModel = require('../models/useModel');
const SecureService = require('../services/secureService');

class LoginController extends Controller{

    constructor(req, res ,next){
        super(req, res ,next);
        this.message={
            'name': 'Login',
             'body':''
        }
    }

    async login(){
        let user = this.req.body;
        try{
            let data = await UserModel.find({username:user.username})
            if(data.length==0){
                this.message['body']="El usuario no existe";
                this.returnJson(404, this.extracted(this.message));
                  }
            console.log(data[0].password, ' ' , user.password);
            if(data[0].password !== user.password){      
                this.message['body']='El password es incorrecto';
                this.returnJson(200, this.extracted(this.message));
            }
            
            let secureService = new SecureService();
            let jwt = secureService.createJwt(data[0]);
            this.message['body']=jwt;
            this.returnJson(200, this.extracted(this.message));
        }catch(err){
            this.message['body']=JSON.stringify(err);
            this.returnJson(500, this.extracted(this.message));

        }
    }
}

module.exports = LoginController;