class Controller
{
    constructor (req, res ,next)
    {
        this.req= req;
        this.res= res;
        this.next=next;
    }

    returnJson(code, param)
    {
        this.res.statusCode=code;
        this.res.header('Acces-Control-Allow-Origin','*');
        this.res.header('Acces-Control-Methods','GET,POST,DELETE,OPTIONS');
        this.res.header('Acces-Control-Allow-Headers','Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, X-Custom-Header Access-Control-Request-Headers,Access-Control-Allow-Origin,Authorization');
        this.res.send(param);
    }

    extracted(mensaje){
        let respuesta = {
            'name': mensaje.name,
            'message': mensaje.body
        }
        return respuesta;
    }
}

module.exports = Controller;