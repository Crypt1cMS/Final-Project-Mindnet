const {request, response} = require('express')
const jwt = require('jsonwebtoken')


const validarJwt =((req = request, res = response, next)=>{

            const token = req.header('keytoken');

            console.log(token);
            if(!token){

                res.status(401).json({

                    msg:"no hay token"
                })
            }

            try {
                
                jwt.verify(token, process.env.SECRETORPRIVATEKEY);

                next();
            } catch (error) {
                console.log(error);
                res.status(401).json({

                    msg:"token no valido"
                })

            }

       

})


module.exports={
    validarJwt
}