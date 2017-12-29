const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating schema
const UserSchema = new Schema({  //make sure the schema defined is correct...
    name:{
        type: String,
        requried: true
    },
    
       email:{
            type: String,
            required: true
        },

        password:{
            type: String,
            required: true
        },

        date:{
            type:Date,
            default:Date.now
        }
    
});

mongoose.model('users', UserSchema);