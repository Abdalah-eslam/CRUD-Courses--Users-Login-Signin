const AllowTo = (...roles) => (req , res , next) => {
    console.log(roles);
    console.log(req.user.role);
    
    
    if (!roles.includes(req.user.role)) {
        return next(AppError.create(403 , 'You are not allowed to access this route',JsonText.Fail));
    }
next();
};

module.exports = AllowTo;