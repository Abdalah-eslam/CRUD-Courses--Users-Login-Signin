const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CoursesSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
});
mongoose.connect(process.env.MONOGOURL)
.then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));

module.exports = mongoose.model('Course', CoursesSchema , 'Courses');