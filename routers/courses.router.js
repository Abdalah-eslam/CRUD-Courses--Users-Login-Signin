const Controller = require('../controller/coureses.controller');
const express = require('express');
const { Validationschema } = require('../meddleware/validationschema');
const VerfiyToken = require('../meddleware/vrefiyJWT');
const AllowTo = require('../meddleware/allowTo');
const app =express.Router();
app.route('/')
    .get(Controller.AllcouresesHandler)
    .post(Validationschema(),
    Controller.addCoursesHandler)
app.route('/:id')
    .get( Controller.OneCourseHandler)
    .patch(Controller.editCoursesHandler)   
    .delete(VerfiyToken,AllowTo("admin"),Controller.deleteCourseHandler)
module.exports = app