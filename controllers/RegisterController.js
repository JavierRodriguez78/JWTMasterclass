const Controller = require('./Controller');
const UserModel = require('../models/useModel');
class RegisterController extends Controller{
    constructor ( req, res ,next)
    {
        super(req, res, next)
        this.message={
            'name': 'Register',
             'body':''
        }
    }

    async register(){
        let datos = this.req.body;
        let userObj = new UserModel(datos);
        try{
            let result = await userObj.save()
            this.message['body']='El usuario se ha guardado';
            this.returnJson(200, this.extracted(this.message));
        }catch(err){
            this.message['body']=JSON.stringify(err);
            this.returnJson(500, this.extracted(this.message));
        }
        
        
    }
}

module.exports = RegisterController;