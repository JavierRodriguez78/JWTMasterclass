const Mongoose = require ('mongoose');

class MongooseConfig{
    static getConnection(){
        return Mongoose.connect('mongodb://localhost:27017/mongoose',{useNewUrlParser:true},(error)=>{
    console.log("Entra");
    console.error(error); 
        })
    }
}

module.exports = MongooseConfig;