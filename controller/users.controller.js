const Users = require('../model/usersModel');
const JsonText = require('../controller/utils/JsonText');
const bcrypt = require('bcrypt');
const AppError = require('../controller/utils/appError');
const appError = require('../controller/utils/appError');
const asyncWrapper = require('../meddleware/asyncWrapper');
const jwt = require('jsonwebtoken');
const AllUsersHandler =async(req , res ,next ) => {
        console.log("User route hit");
    const AllUsers = await Users.find({}, {"__v": 0 , "password": 0});
    return res.json({status : JsonText.Sucsses , data:{Users :AllUsers}});
}

const LoginHandler =asyncWrapper(async(req , res , next) => {
    const body =  req.body
    if (body.email && body.password) {
    const user =await Users.findOne({email : body.email})
    
    if (user) {
        const isMatch = await bcrypt.compare(body.password.toString() , user.password.toString())
        if (isMatch) {
            const token = await jwt.sign({email : user.email , id : user._id , role: user.role} , process.env.SECRET_JWT , {expiresIn : '1d'})
            return res.json({status : JsonText.Sucsses , data:{name :user.name, email :user.email ,token , role : user.role}});
        }else {
            const error = AppError.create(401 , 'password not match',JsonText.Fail);
            return next(error);
        }
    }else {
        const error = appError.create(401 , 'email not found',JsonText.Fail);
        return next(error);
    }
    }
    else {
        const error = appError.create(400 , 'email or password not found',JsonText.Fail);
        return next(error);
    }
})
const RegisterHandler =asyncWrapper(async(req , res) => {
    const body = req.body;
    const avatar = req.file.filename

    // const avater= req.file.path
    const user = new Users(body); 
    user.avatar = avatard
    const hashedPassword = await bcrypt.hash(user.password , 10)
    user.password = hashedPassword
    const token = await jwt.sign({email : user.email , id : user._id , role: user.role} , process.env.SECRET_JWT , {expiresIn : '1d'})
    user.token = token
    await user.save();
    return res.status(201).json({status : JsonText.Sucsses , data:{user}});
})
module.exports = {
    AllUsersHandler,
    LoginHandler,
    RegisterHandler
}