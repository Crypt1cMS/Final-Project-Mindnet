const {validationResult} = require('express-validator')

const validarCampos = (req,res, next )=>{
    //revisar errores
    const revisarerror = validationResult(req);
    if(!revisarerror.isEmpty()){
        return res.status(400).json(revisarerror);

    }
        next();
}


module.exports = validarCampos