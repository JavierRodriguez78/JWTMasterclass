const Moment= require('moment');
const Jwt = require('jwt-simple');

class secureService{

    createJwt(user){
        let payload={
            iss:'geekshubs',
            sub:user.id,
            iat:Moment().unix(),
            exp:Moment().add(2,"days").unix()
        }
        return Jwt.encode(payload, 'api');
    }
}

module.exports = secureService;