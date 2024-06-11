const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
        "title":{type:String,required:true},
        "description":{type:String,required:true},
        "date":{type:String,required:true},
        "duration":{type:String,required:true},
        "venue":{type:String,required:true},
        "name":{type:String,required:true},
    }
)

let coursemodel=mongoose.model("course",Schema);
module.exports={coursemodel}