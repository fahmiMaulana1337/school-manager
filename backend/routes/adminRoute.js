
const express = require('express');
const AdminController = require('../controllers/adminController');
const router = express.Router()
const { authentication } = require('../middlewares/auth');

router.use(authentication)
router.post('/user',AdminController.addAccount);
router.post('/teacher',AdminController.addTeacher);
router.post('/schedule',AdminController.addSchedule);
router.post('/class',AdminController.addClass);
router.put('/teacher/:id',AdminController.editTeacher)
router.put('/class/:id',AdminController.editClass)
router.put('/schedule/:id',AdminController.editSchedule)
router.patch('/class/:id',AdminController.deactiveClass);
router.patch('/class/:id',AdminController.activeClass);
router.delete('/teacher/:id',AdminController.deleteTeacher);
router.delete('/schedule/:id',AdminController.deleteSchedule);

module.exports=router;
