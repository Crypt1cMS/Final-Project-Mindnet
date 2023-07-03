const jwt = require('jsonwebtoken')
require('dotenv').config();


const generarJwt = (uid = '')=>{

    return new Promise((resolve, reject)=>{

        const payload = {uid};

        jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{
            expiresIn: "2h"
        
        },(err, token)=>{

            if(err){
                console.log(err);
                reject('hay bobo');

            } else{
                resolve(token)
            }

        })


    })

}

module.exports ={
    generarJwt
}