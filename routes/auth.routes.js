const express = require('express');
const router = express.Router();

import * as authCtrl from '../controllers/auth.controller'

router.post('/signup', authCtrl.signUp);
router.post('/signin',authCtrl.signIn);


module.exports = router;