const jwt = require('jsonwebtoken');
const AppError = require('../controller/utils/appError');
const JsonText = require('../controller/utils/JsonText');
const VerfiyToken = async(req , res , next) => {
    try {
        const authHeader = req.headers['authorization'] || req.headers['Authorization'];
        if (!authHeader) {
            return next(AppError.create(401, 'token not found', JsonText.Fail));
        }
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_JWT);
        req.user = decoded;
        return next();
    } catch (err) {
        return next(err);
    }
}
module.exports = VerfiyToken