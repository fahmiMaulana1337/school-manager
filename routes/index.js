const express = require('express');
const router = express.Router();
const UserRouter= require('./teacherRoute');
const AdminRouter= require('./adminRoute');

router.use(UserRouter);
router.use(AdminRouter);


module.exports=router;
