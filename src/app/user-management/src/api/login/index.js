const {User} = require("../../lib/db/models");
const jwt = require("jsonwebtoken");

module.exports = (args)=>{
    let token;
    return new Promise((resolve,reject)=>{

        if(typeof args !== "object"){
            return reject(TypeError({success:false,message:"please provide valid args"}))
        }
    
        if(!args.payload || !args.secret){
            return reject({success:false, message:"provide valid args: missing payload or secret"})
        }

        token = jwt.sign(args.payload,args.secret);
        return resolve({success:true,token, payload:args.payload});
    })
}