/**
 * Created by shravya on 28/3/17.
 */
var mongoose = require("mongoose");
var Schema=mongoose.Schema
var schemaTypes=mongoose.Schema.Types
var userSchema=new Schema({
        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        dateOfBirth: {
            type: Date,
            default: Date.now()
        },
        addresses: [{
            type: schemaTypes.ObjectId,
            ref: 'addresses',
            trim: true
        }]
    },

    {collection : "users"}
);
var userModel = mongoose.model('users',userSchema);
module.exports=userModel;

