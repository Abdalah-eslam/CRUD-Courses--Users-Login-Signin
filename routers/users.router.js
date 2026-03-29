const express = require('express');
const Controller = require('../controller/users.controller');
const verfiyToken = require('../meddleware/vrefiyJWT');
const multer = require('multer');
const appError = require('../controller/utils/appError');
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `User_${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
})
const upload = multer({ storage: diskStorage ,fileFilter: function (req, file, cb) {
    if (file.mimetype.split("/")[0]==='image') {
    return cb(null, true);
    } else {
    return cb( appError.create(400 , 'file must be image', 'Fail'), false);
    
    }
}});

const router = express.Router();
router.route('/')
    .get(verfiyToken,Controller.AllUsersHandler)
router.route('/login')
    .post( Controller.LoginHandler)
router.route('/register')
    .post(upload.single('avatar'), Controller.RegisterHandler)


module.exports = router
