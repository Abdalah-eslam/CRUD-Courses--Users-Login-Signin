const {validationResult}= require('express-validator');
const  courses = require('../model/coursesModel');
const JsonText = require('../controller/utils/JsonText');
const asyncWrapper = require('../meddleware/asyncWrapper');
const AppError = require('../controller/utils/appError');
const appError = require('../controller/utils/appError');
const AllcouresesHandler =asyncWrapper (async(req , res , next)=>{
    const query = req.query
    const limit = query.limit || 10
    const page = query.page || 1
    const skip = (page-1)*limit
    const Courses = await courses.find({}, {"__v": 0}).limit(limit).skip(skip);
    res.json({status : JsonText.Sucsses , data:{Courses}});
})
const OneCourseHandler =asyncWrapper( async (req, res ,next) => {
    const course = await courses.findById(req.params.id);
            if (!course) {
            const error = AppError.create(404 , 'course not found',JsonText.Fail);
                return next(error);
            }
            return res.json({status : JsonText.Sucsses , data:{course}});
    })
const editCoursesHandler =asyncWrapper( async (req, res, next) => {
            const Course = await courses.findByIdAndUpdate(req.params.id, {$set : req.body},{returnDocument: 'after' , runValidators: true , upsert: false});
            if (!Course) {
            const error = AppError.create(404 , 'course not found',JsonText.Fail);
            return next(error);
            }
            return res.status(201).json({status : JsonText.Sucsses , data:{Course}});
    }    
)
const deleteCourseHandler =asyncWrapper( async (req, res , next) => {
        
            const Course = await courses.findByIdAndDelete(req.params.id);
            if (!Course) {
            const error =appError.create(404 , 'course not found',JsonText.Fail);
            return next(error);
            }
        return res.status(201).json({status : JsonText.Sucsses , data:{Course}});
        

    }    
)
const addCoursesHandler =asyncWrapper( async (req, res ,next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        const Error = appError.create(400 , errors.array(),JsonText.Fail);
        return next(Error);
        }
    const course = await courses.create(req.body);
    res.status(201).json({status : JsonText.Sucsses , data:{course}});
})
module.exports = {
    AllcouresesHandler,
    OneCourseHandler,
    editCoursesHandler,
    deleteCourseHandler,
    addCoursesHandler
}