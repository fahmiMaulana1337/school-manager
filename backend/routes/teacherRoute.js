
const express = require('express');
const Controller = require('../controllers/controller');
const router = express.Router()
const { authentication } = require('../middlewares/auth');

router.post('/register',Controller.register);
router.post('/login',Controller.login);
router.use(authentication)
router.get('/teacher',Controller.getTeacher);
router.get('/student',Controller.getStudent);
router.get('/class',Controller.getClass);


module.exports=router;
