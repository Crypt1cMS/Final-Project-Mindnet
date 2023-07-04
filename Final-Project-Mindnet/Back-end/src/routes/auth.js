const express = require('express');
const {check} = require('express-validator');
const {login} = require('../controllers/auth');
const validarCampos = require('../../middlewares/validar-campos');
const router = express.Router();

router.post('/login',check('email','este no es un correo valido').isEmail(), validarCampos,login)


module.exports = router;