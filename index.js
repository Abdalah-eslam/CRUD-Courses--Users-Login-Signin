require('dotenv').config()
const Express = require('express');
const cors = require('cors');
const CoursesRouter = require('./routers/courses.router');
const UsersRouter = require('./routers/users.router');
const JsonText = require('./controller/utils/JsonText');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3001;
const app = Express();
app.use(cors());
app.use(Express.json());
app.use("/uploads", Express.static(path.join(__dirname, "uploads")));
app.use('/api/courses', CoursesRouter);
app.use('/api/users', UsersRouter);
app.use( (req, res) => {
    res.status(404).json({status : JsonText.Error , message: 'this route is not Found'});
}); 
app.use((err , req , res , next) =>{ 
    res.status(err.status || 500).json({status :err.statusText || JsonText.Error , message: err.message || 'something went wrong', code: err.status || 500 , data: null}); 
})
app.listen(process.env.PORT || port, "0.0.0.0"||hostname, () => {
    console.log(`Server running at http://${hostname}:${process.env.PORT}/`);
})
