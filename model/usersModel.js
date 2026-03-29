const mongoose = require('mongoose');
const validator = require('validator'); 
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
name: { type: String, required: true },
email: { type: String, required :{value: true , message: 'email is required'} , unique: true , validate: {validator: validator.isEmail , message: 'email is not valid '}, },
password: { type: String, required: true },
token: { type: String},
role: {type: String , enum : ['admin' , 'user' , 'manger'] , default: 'user'},
avatar: {type : String , default : 'default.webp'}
});
module.exports = mongoose.model('user', UsersSchema);