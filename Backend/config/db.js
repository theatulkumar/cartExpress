const mongoose = require('mongoose');
exports.dbConn = ()=>{
    const dbURL ="mongodb+srv://nitinraj:mongonitin123@cluster0.thqvugf.mongodb.net/testdb?retryWrites=true&w=majority"
    mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
    console.log("Connected to database");
    }).catch((err)=>console.error(err));
}