
const express = require('express');
const AdminController = require('../controllers/adminController');
const router = express.Router()
const { authentication } = require('../middlewares/auth');

router.use(authentication)
router.post('/addTeacher',AdminController.addTeacher);
router.delete('/deleteTeacher/:id',AdminController.deleteTeacher);

module.exports=router;
