const JWT = require('jwt-simple');
const Moment = require('moment');

let Authenticated = (req, res ,next)=>{
    if(!req.headers.authorization){
        return res.status(403)
        .send({message: 'La petición no tiene la cabecera'});
    }

    let token = req.headers.authorization.split(' ')[1];
    console.log(token);
    let payload = JWT.decode(token,'api');
    try{
        if(payload.exp <=Moment().unix()){
            return res
            .status(401)
            .send({message: "El token ha expirado"});
        }
    }
    catch(err){
        console.error(err);
    }
   req.user = payload.sub
    next();
}

module.exports = Authenticated;